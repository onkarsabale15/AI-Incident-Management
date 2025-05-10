const {LLM} = require('static_values');
const { OpenAI } = require('openai');

const client = new OpenAI({
  apiKey: LLM.KEY,
});

async function chat(messages) {
  const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages,
    temperature: 0.2,
    response_format:{type:"json_object"}
  });
  return JSON.parse(completion.choices[0].message.content);
}

module.exports = { chat };