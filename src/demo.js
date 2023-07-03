//simple program for leap year
const customLogger = require('./main');
const { PROJECT_NAME } = require('./helpers/constants');

try {
    /* uncomment each one of the values for inputYear lines one by one to see different use cases */
    // const inputYear = null;
    // const inputYear = "202"; 
    // const inputYear = 2016; 
    const inputYear = 2017; 
    // const inputYear = 2000; 
    // const inputYear = 300; 
    // const inputYear = 2;
    // const inputYear = -2017;
    // const inputYear = -2016;
    // const inputYear = 2016.27271; 



    if(!inputYear || isNaN(inputYear)) {
        throw new Error("Invalid input type detected");
    }

    if(inputYear != Math.floor(inputYear)) {
        throw new Error("Year must be a whole number");
    }

    if(Number(inputYear) !== inputYear) {
        console.warn('Please provide numeric type input'); /* PLEASE NOTE: CONSOLES SHOULD ALWAYS BE REMOVED BEFORE
                                                              YOUR CODE GOES TO PRODUCTION. */
        const typeMismatchWarning = new Error('Please provide numeric type input');
        typeMismatchWarning.name = 'type_mismatch';

        //in the example provided below, we overwrite the default value of timeZone
        customLogger({
            logLevel: 'warning', 
            event: typeMismatchWarning,
            projectName: PROJECT_NAME,
            timeZone: 'Africa/Abidjan',
        });
    }

    if(inputYear < 0) {
        const yearBeforeZeroAD = new Error(`Assuming that the provided input meant ${inputYear*-1}, B.C. ...`);
        console.info(yearBeforeZeroAD.message); /* PLEASE NOTE: CONSOLES SHOULD ALWAYS BE REMOVED BEFORE YOUR CODE 
                                                   GOES TO PRODUCTION. */
        yearBeforeZeroAD.name = 'Year before 0 A.D.';
        customLogger({
            logLevel: 'info', 
            event: yearBeforeZeroAD, 
            projectName: PROJECT_NAME,
        });
    }
    

    const ans = (inputYear%100 == 0 && inputYear%400 == 0) || (inputYear%4 == 0 && inputYear%100 != 0);
    const msg = ans ? `${inputYear} is a leap year` : `${inputYear} is not a leap year`;
    const successEvent = new Error(msg);
    successEvent.name = 'flow_complete';
    console.info(msg); //PLEASE NOTE: CONSOLES SHOULD ALWAYS BE REMOVED BEFORE YOUR CODE GOES TO PRODUCTION
    customLogger({
        logLevel: 'info', 
        event: successEvent, 
        projectName: PROJECT_NAME,
    });
} catch(err) {
    console.error("An error has occurred:", err.message); /* PLEASE NOTE: CONSOLES SHOULD ALWAYS BE REMOVED BEFORE 
                                                             YOUR CODE GOES TO PRODUCTION. */

    customLogger({
        logLevel: 'error', 
        event: err, 
        projectName: PROJECT_NAME,
    });
}
