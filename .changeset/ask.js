module.exports = {
    promptBeforeAdd: true,
    questions: [
      {
        message: 'Выберите тип изменений',
        type: 'list',
        choices: ['patch', 'minor', 'major'],
        name: 'releaseType'
      },
      {
        message: 'Введите номер задачи (например, TASK-123)',
        type: 'input',
        name: 'taskNumber',
        validate: value => value ? true : 'Номер задачи обязателен'
      },
      {
        message: 'Опишите задачу',
        type: 'input',
        name: 'taskDescription',
        validate: value => value ? true : 'Описание задачи обязательно'
      }
    ],
    formatCommit: (answers) =>
      `${answers.taskNumber} - ${answers.taskDescription}`
  };