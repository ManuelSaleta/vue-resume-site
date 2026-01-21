import { OpenAI } from 'openai'
import ResumeContent from '@/assets/resume.json'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  organization: import.meta.env.VITE_OPENAI_ORG_ID,
  project: import.meta.env.VITE_OPENAI_PROJECT_ID,
  dangerouslyAllowBrowser: true,
})

const fetchResponse = async (question: string) => {
  const resumeContent = JSON.stringify(ResumeContent)
  const response = await openai.chat.completions.create({
    model: 'chatgpt-4o-latest',
    messages: [
      { role: 'system', content: resumeContent },
      {
        role: 'user',
        content: `The user asked the following question: ${question}. respond strictly using the content given to you. Do not answer any question not related to the contents of the resume`,
      },
    ],
  })
  return response
}

export { fetchResponse }
