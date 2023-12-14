import axios from 'axios'
import { Elysia } from 'elysia'

async function httpGet(uri: string) {
  try {
    const response = await axios.get(uri, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 2000,
    })

    if (response.status !== 200) {
      throw new Error(`Request failed with status code ${response.status}`)
    }

    console.log(response)

    return response.data
  } catch (error) {
    console.error(error)
    return error
  }
}

const app = new Elysia()

app.get('/', async () => {
  const data = await httpGet('http://127.0.0.1:8080')
  return data
})

app.listen(3000, () => console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`))
