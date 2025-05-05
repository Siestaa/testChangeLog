const { generateChangelog } = await import('@changesets/changelog');

module.exports = async function (changesets, releasePlan, options) {
  const result = await generateChangelog(changesets, releasePlan, options);

  return result.map(entry => {
    if (entry.type === 'release') {
      let notes = entry.notes.replace(/[a-f0-9]{7}: /g, '');

      const taskNumber = getTaskNumber(entry.commit);
      const taskDescription = getTaskDescription(entry.commit);

      if (taskNumber) {
        notes = `**Задача:** ${taskNumber}\n**Описание:** ${taskDescription}\n\n${notes}`;
      }

      return { ...entry, notes };
    }
    return entry;
  });
};

function getTaskNumber(commitMessage) {
  const match = commitMessage.match(/\d+/i);
  return match ? match[0] : null;
}

function getTaskDescription(commitMessage) {
  const lines = commitMessage.split('\n');
  return lines[0].replace(/[a-f0-9]{7}: /g, '').trim();
}