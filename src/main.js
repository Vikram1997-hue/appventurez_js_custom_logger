const fs = require('fs');
const os = require('os');
const path = require('path');
const {
    computeLineNo,
    getFileName,
} = require('./helpers/utils');
const { TIMEZONE } = require('./helpers/constants');


const customLogger = ({ logLevel, event, projectName, timeZone = TIMEZONE }) => {
    const today = new Date();
    const adjustedDate = today.toLocaleDateString('en-US', { timeZone });
    const adjustedTime = today.toLocaleTimeString('en-US', { timeZone });

    const projectRoot = '/' + event.stack.split('(/')[1].split(projectName)[0] + projectName;
    const logFolder = path.join(projectRoot, 'logs');


    if (!fs.existsSync(logFolder)) {
        fs.mkdirSync(logFolder);
    }

    let logFileName = path.join(logFolder, `log.${adjustedDate.split('/')[2]}-${adjustedDate.split('/')[0]}-${adjustedDate.split('/')[1]}`);

    const entry = {
        logLevel,
        filename: getFileName(event, projectName),
        time: adjustedTime,
        lineNo: computeLineNo(event),
        logName: event.name,
        logMessage: event.message,
    };


    fs.appendFileSync(logFileName, JSON.stringify(entry) + '\n');

    //TODO: bytestream
};

module.exports = customLogger;
