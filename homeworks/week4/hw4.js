const request = require('request');

const clientId = 'l5kp2ow5vnm03flnyla22p1pstsrtf';
const API_ENDPOINT = 'https://api.twitch.tv/kraken/games/top';

request.get(
  {
    url: `${API_ENDPOINT}`,
    headers: {
      'Client-ID': clientId,
      /* eslint-disable-next-line */
      'Accept': 'application/vnd.twitchtv.v5+json',
    },
  },
  (err, res, body) => {
    const games = JSON.parse(body);
    for (let i = 0; i < games.top.length; i += 1) {
      const view = games.top[i].viewers;
      const gameName = games.top[i].game.name;
      console.log(`${view} ${gameName}`);
    }
  },
);
