# beaconnotify

Send messages to contact groups using beacon

## Installation
```bash
git clone https://github.com/sdunster/beaconnotify.git
cd beaconnotify && npm install -g
```

## Usage

Look up a contact group's ID using the Contact Group Register page.
Remove the `--sandbox` flag to send messages through production beacon
(instead of trainbeacon).

```bash
export BEACON_USERNAME='user'
export BEACON_PASSWORD='pass'
beaconnotify --sandbox contact_id 'my message'
```
or
```bash
BEACON_USERNAME='user' BEACON_PASSWORD='pass' beaconnotify --sandbox contact_id 'my message'
```

## License
[MIT](LICENSE)

