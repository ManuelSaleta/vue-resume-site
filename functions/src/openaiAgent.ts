import * as functions from 'firebase-functions'
import OpenAI from 'openai'
import ResumeContent from './resume.json'

const client = new OpenAI({
  apiKey: functions.config().openai.key,
})

export const openaiAgent = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(204).send('')
    return
  }

  const { question } = req.body

  if (!question) {
    res.status(400).json({ error: 'Missing question' })
    return
  }

  try {
    const resumeContent = JSON.stringify(ResumeContent)

    const response = await client.responses.create({
      model: 'gpt-4.1-mini',
      input: [
        {
          role: 'system',
          content: resumeContent,
        },
        {
          role: 'user',
          content: `The user asked the following question: ${question}. Respond strictly using the content given to you. Do not answer any question not related to the contents of the resume.`,
        },
      ],
    })

    res.json(response)
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
})
