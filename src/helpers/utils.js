const computeLineNo = (event) => event.stack.split('at')[1].split(':')[1];

const getFileName = (event, projectName) => event.stack.split(projectName)[1].split(':')[0];

module.exports = {
    computeLineNo,
    getFileName,
};
