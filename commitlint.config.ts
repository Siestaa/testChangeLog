import { SCOPES, TYPES } from './semver/constants'
import type { Config } from '@changesets/types'

const scopes = Object.keys(SCOPES)
const types = TYPES
const list = Object.keys(TYPES)

const config: Config = {
  disableEmoji: true,
  format: '{type}{scope}: {subject}',
  list,
  maxMessageLength: 72,
  messages: {
    body: 'ИНФОРМАЦИЯ? Описание внесенных изменений',
    breaking: 'ВНИМАНИЕ! Опиши критические изменений функциональности (если они есть)',
    scope: 'ОБЛАСТЬ. Выберите область изменения',
    subject: 'ТЕМА. Кратко опишите изменения',
    type: 'ТИП. Выберите тип изменения из списка',
  },
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking'],
  scopes,
  types,
}

export default config