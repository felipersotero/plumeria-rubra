// webpack.config.js
const Dotenv = require('dotenv-webpack');

module.exports = {

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_API_KEY: JSON.stringify(process.env.REACT_APP_API_KEY),
        REACT_APP_AUTH_DOMAIN: JSON.stringify(process.env.REACT_APP_AUTH_DOMAIN),
        REACT_APP_PROJECT_ID: JSON.stringify(process.env.REACT_APP_PROJECT_ID),
        REACT_APP_STORAGE_BUCKET: JSON.stringify(process.env.REACT_APP_STORAGE_BUCKET),
        REACT_APP_MESSAGING_SENDER_ID: JSON.stringify(process.env.REACT_APP_MESSAGING_SENDER_ID),
        REACT_APP_APP_ID: JSON.stringify(process.env.REACT_APP_APP_ID),
        REACT_APP_TEST: JSON.stringify(process.env.REACT_APP_TEST),
      },
    }),
  ],

  // plugins: [
  //   new Dotenv()
  // ]
};