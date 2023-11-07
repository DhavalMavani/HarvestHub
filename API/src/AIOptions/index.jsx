export const arrayItems = [
  {
    name: "Q&A",
    id: "q&a",
    description: "Answer questions based on existing knowledge",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },

  {
    name: "Sentiment Analysis",
    id: "SentimentAnalysis",
    description: "Detects sentiment for list of prompts",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },

  {
    name: "English to Other languages",
    id: "translate",
    description: "Translates English text into other languages.",
    option: {
      model: "text-davinci-003",
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },

  {
    name: "Grammer Correction",
    id: "grammerCorrection",
    description: "Corrects sentences into standard English.",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },

  {
    name: "Summary of an article",
    id: "summary",
    description: "Translates difficult text into simpler concepts.",
    option: {
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },

  {
    name: "Factual Answering",
    id: "Factual_Answering",
    description: "It gives responses based on facts.",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },

  {
    name: "Recipe Creator",
    id: "Recipe_creator",
    description: "Create a recipe from a list of ingredients.",
    option: {
      model: "text-davinci-003",
      temperature: 0.3,
      max_tokens: 165,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },

  {
    name: "Spreadsheet creator",
    id: "Spreadsheet_creator",
    description: "Create spreadsheets of various kinds of data",
    option: {
      model: "text-davinci-003",
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },

  {
    name: "Ad from product description",
    id: "Ad_creator",
    description: "Turn a product description into ad copy.",
    option: {
      model: "text-davinci-003",
      temperature: 0.5,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
];
