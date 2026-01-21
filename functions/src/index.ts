import * as functions from 'firebase-functions'
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: functions.config().openai.key,
})

export const openaiProxy = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') {
    res.status(204).send('')
    return
  }

  try {
    const response = await client.responses.create({
      model: 'gpt-4.1-mini',
      input: req.body.input,
    })

    res.json(response)
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})
