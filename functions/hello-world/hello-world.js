const randomWords = require('random-words')

const randomWord = async () => {
  return Promise.resolve(randomWords().toUpperCase())
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const body = await randomWord();
    return { statusCode: 200, body: body }
  }
  catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
