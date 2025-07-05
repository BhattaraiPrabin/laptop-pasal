import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Add system message to provide context about Laptop Pasal
  const systemMessage = {
    role: "system",
    content:
      "You are a helpful customer support assistant for Laptop Pasal, a laptop and accessories store in Nepal. You help customers with product recommendations, technical questions, and information about our services including buying new laptops, second-hand laptops, accessories, and our sell-my-laptop program.",
  }

  // Add the system message to the beginning of the messages array
  const messagesWithSystem = [systemMessage, ...messages]

  const result = streamText({
    model: openai("gpt-4o"),
    messages: messagesWithSystem,
  })

  return result.toDataStreamResponse()
}
