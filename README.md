# JS Custom Logger

This is a simple logger for JavaScript, that mimics the functionality of other popular logger modules out there such as Winston and Pino. 

Install the package using NPM (find the npmjs.com page [here](https://www.npmjs.com/package/appventurez_js_custom_logger?activeTab=readme)) -

    npm i appventurez_js_custom_logger

The main logic of the logger is written in src/main.js . Whenever you use the custom logger, kindly write -
    
    const customLogger = require('appventurez_js_custom_logger');

at the top of your program. You may then use the logger in the following manner - 
    
    customLogger({
        logLevel: 'info',
        event: someEvent,
        projectName: 'someProject'
    });


The expected paramater is a single object, containing the following properties - 
  - `logLevel`: Currently, only the values 'warning', 'error', and 'info' are accepted
  - `event`: A JS Error object that has a name, message, and stack trace. Make sure to modify your Error object before providing it as a property
  - `projectName`: The name of the project's root directory folder. For example, if your root directory is /home/user/Documents/TRAINEE_BATCH_2023/appventurez_js_custom_logger, then this property should have the value 'appventurez_js_custom_logger'.
  - `timeZone` (optional): The default value is 'Asia/Kolkata'. Provide this optional property only if you wish to change your timezone to something else. The value of the timeZone property must must be in IANA format (refer to https://www.iana.org/time-zones) 
