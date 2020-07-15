const request = require('request');
const process = require('process');

const API_ENDPOINT = ('https://restcountries.eu/rest/v2/');

const search = process.argv[2];

function searchCountry(country) {
  request.get(
    `${API_ENDPOINT}name/${country}`,

    (err, res, body) => {
      if (res.statusCode === 404) {
        console.log('找不到國家資訊');
      }

      const details = JSON.parse(body);

      for (let i = 0; i < details.length; i += 1) {
        const {
          name,
          capital,
          currencies: [
            {
              code: currency,
            },
          ],
          callingCodes: countryCode,
        } = details[i];

        console.log(`============
國家：${name}
首都：${capital}
貨幣：${currency}
國碼：${countryCode}`);
      }
    },
  );
}

searchCountry(search);
