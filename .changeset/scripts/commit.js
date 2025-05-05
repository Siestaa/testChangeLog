module.exports = {
    getCommitMessage: ({ type, name, version }) => {
      return `release: ${type ? `${type} ` : ''}v${version}`;
    }
  };