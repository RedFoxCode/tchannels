# tchannels

Search Telegram channels with [tchannels.me](http://tchannels.me).

# Installation

```sh
npm i tchannels
```

# Usage

Example:

```javascript
const TChannels = require("tchannels");
TChannels.getTop().then(console.log);
/*
[ 
    { 
        name: 'LeVardos',
        description: 'The best humor stuff on the Web.',
        link: 'http://telegram.me/levardos' 
    },
    { 
        name: 'Web Dev (frontend, blogs)',
        description: 'Web Development news feed.',
        link: 'http://telegram.me/webdev_eng' 
    },
   ...
*/
```

# Methods

Every method returns Promise

**TChannels.getTop()**

Get top channels.

**TChannels.search**(**string** query)

Search channels