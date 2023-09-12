import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-0613',
  'gpt-3.5-turbo-16k',
  'gpt-3.5-turbo-16k-0613',
  'gpt-4',
  'gpt-4-0314',
  'gpt-4-0613',
  'gpt-4-32k',
  'you-chat',
  'vicuna-7b-test',
  'oasst-sft-6-llama-30b',
  'oasst-sft-4-pythia-12b',
  'oasst-sft-1-pythia-12b',
  'llama-2-7b',
  'llama-2-70b',
  'llama-2-13b',
  'falcon-180b',
  'claude-instant',
  'claude-100k'
  // 'gpt-3.5-turbo-0301',
  // 'gpt-4-0314',
  // 'gpt-4-32k-0314',
];

export const defaultModel = 'gpt-3.5-turbo';

export const modelMaxToken = {
  'gpt-3.5-turbo': 4096,
  'gpt-3.5-turbo-0301': 4096,
  'gpt-3.5-turbo-0613': 4096,
  'gpt-3.5-turbo-16k': 16384,
  'gpt-3.5-turbo-16k-0613': 16384,
  'gpt-4': 8192,
  'gpt-4-0314': 8192,
  'gpt-4-0613': 8192,
  'gpt-4-32k': 32768,
  'gpt-4-32k-0314': 32768,
  'gpt-4-32k-0613': 32768,
  'you-chat':512,
  'vicuna-7b-test': 512,
  'oasst-sft-6-llama-30b': 8192,
  'oasst-sft-4-pythia-12b': 1024,
  'oasst-sft-1-pythia-12b': 1024,
  'llama-2-7b': 4096,
  'llama-2-70b': 4096,
  'llama-2-13b': 4096,
  'falcon-180b': 8192,
  'claude-instant': 9432,
  'claude-100k': 104800
};

export const modelCost = {
  'gpt-3.5-turbo': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-0301': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-0613': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-16k': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'gpt-3.5-turbo-16k-0613': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'gpt-4': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-0314': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-0613': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-32k': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'gpt-4-32k-0314': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'gpt-4-32k-0613': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'you-chat': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'vicuna-7b-test': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'oasst-sft-6-llama-30b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'oasst-sft-4-pythia-12b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'oasst-sft-1-pythia-12b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'llama-2-7b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'llama-2-70b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'llama-2-13b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'falcon-180b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'claude-instant': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'claude-100k': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
