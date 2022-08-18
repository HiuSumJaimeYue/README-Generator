// Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    const promptProject = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the title of your project? (Required)',
                validate: projectNameInput => {
                    if (projectNameInput) {
                        return true;
                    } else {
                        console.log('Please enter your project title!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of the project (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter your description!');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'installationInstructions',
                message: 'Provide installation instructions of the project (Required)',
                validate: installationInstructionsInput => {
                    if (installationInstructionsInput) {
                        return true;
                    } else {
                        console.log('Please enter the installation instructions of the project!');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'usageInformation',
                message: 'Provide usage information of the project (Required)',
                validate: usageInformationInput => {
                    if (usageInformationInput) {
                        return true;
                    } else {
                        console.log('Please enter the usage information of the project!');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'contributionGuidelines',
                message: 'Provide contribution guidelines of the project (Required)',
                validate: contributionGuidelinesInput => {
                    if (contributionGuidelinesInput) {
                        return true;
                    } else {
                        console.log('Please enter the contribution guidelines of the project!');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'testInstructions',
                message: 'Provide test instructions of the project (Required)',
                validate: testInstructionsInput => {
                    if (testInstructionsInput) {
                        return true;
                    } else {
                        console.log('Please enter the test instructions of the project!');
                        return false;
                    }
                }
            }
        ])
    }
    const promptUser = () => {
        console.log(`
        =================
        Contact Information
        =================
        `);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username (Required)',
                validate: gitHubUsernameInput => {
                    if (gitHubUsernameInput) {
                        return true;
                    } else {
                        console.log('Please enter your Github Username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Provide your email address (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            }
        ]);
    };

    promptProject()
        .then(projectInfo => console.log(projectInfo))
        .then(promptUser)
        .then(userInfo => console.log(userInfo));
}

// Function call to initialize app
init();
