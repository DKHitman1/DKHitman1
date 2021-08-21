name": "games-wabot",
  "version": "0.9.8",
  "description": "Customizable WhatsApp Bot",
  "depecrated": false,
  "main": "index.js",
  "directories": {
    "lib": "lib",
    "src": "src",
    "plugins": "plugins"
  },
  "scripts": {
    "start": "node index.js",
    "test": "node test.js",
    "test2": "nodemon index.js"
  },
  "keywords": [
    "termux-whatsapp-bot",
    "whatsapp-bot",
    "whatsapp",
    "js-whatsapp",
    "whatsapp",
    "Games-wabot",
    "wabot-aq"
  ],
  "homepage": "https://github.com/BochilGaming/games-wabot",
  "author": {
    "name": "BochilGaming"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Nurutomo/wabot-aq.git"
  },
  "bugs": {
    "url": "https://github.com/BochilGaming/games-wabot/issues"
  },
  "license": "GPL-3.0-or-later",
  "dependencies": {
    "@adiwajshing/baileys": "github:adiwajshing/baileys",
    "awesome-phonenumber": "^2.47.0",
    "brainly-scraper-v2": "^1.1.2",
    "cfonts": "^2.9.3",
    "chalk": "^4.1.0",
    "cheerio": "^1.0.0-rc.5",
    "dotenv": "10.0.0",
    "express": "^4.17.1",
    "file-type": "^16.4.0",
    "fluent-ffmpeg": "^2.1.2",
    "form-data": "^3.0.1",
    "google-it": "^1.6.2",
    "jsdom": "^16.5.1",
    "node-fetch": "^2.6.1",
    "node-gtts": "^2.0.2",
    "node-os-utils": "^1.3.5",
    "human-readable": "^0.2.1",
    "package.json": "^2.0.1",
    "qrcode": "^1.4.4",
    "similarity": "^1.2.1",
    "qrcode-terminal": "^0.12.0",
    "socket.io": "^4.0.1",
    "syntax-error": "^1.4.0",
    "terminal-image": "^1.2.1",
    "translate-google-api": "^1.0.4",
    "nodemon": "^2.0.7",
    "url-regex": "^5.0.0",
    "xmldom": "github:xmldom/xmldom#0.7.0",
    "warn": "^1.0.1",
    "yargs": "^16.2.0",
    "node-webpmux": "^2.0.3",
    "yt-search": "^2.7.6",
    "g-i-s": "^2.1.6"
  },
  "nodemonConfig": {
    "ignore": [
      "plugins/*",
      "session.data.json"
    ]
  }
}
