var _ = require('underscore');
var Libbeacon = require('libbeacon');

var send_message = function(opts, cb) {
  var options = _.defaults(_.clone(opts) || {}, {                               
     sandbox: false,
  });
  if(!('username' in options)) throw new Error('Must provide username');
  if(!('password' in options)) throw new Error('Must provide password');
  if(!('message' in options)) throw new Error('Must provide message');
  if(!('contactGroup' in options)) throw new Error('Must provide contactGroup');

  var beacon = new Libbeacon({
    development: options.sandbox
  });
  beacon.login(options.username, options.password, function(error, success) {
    if(error) {
      cb && cb(error);
      return;
    }
    if(!success) {
      cb && cb(Error("Invalid credentials"));
      return;
    }
    beacon.get('Messages', {
        method: 'POST',
        form: {
          'MessageText': options.message,
          'ContactGroupIds': options.contactGroup
        }
      },
      function(error, data) {
        if(error) {
          cb && cb(error);
          return;
        }
        cb && cb();
      }
    );
  });
}

module.exports = send_message;
