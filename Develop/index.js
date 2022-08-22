// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create a function to write README file
function writeToFile(fileName, data) {
    const generatePage = readmeData => {
        return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>README Generator</title>
    </head>
  
    <body>
      <h1>${readmeData.name}</h1>
      </header>

      <main>
        <div>
          <h2>Description</h2>
          <p>${readmeData.description}</p>
        </div>
        <div>
          <h2>Table of Contents</h2>
          <ul>
            <li>
              <a href="#installation">Installation</a>
            </li>
            <li>
              <a href="#usage">Usage</a>
            </li>
            <li>
              <a href="#license">License</a>
            </li>
            <li>
              <a href="#contributing">Contributing</a>
            </li>
            <li>
              <a href="#tests">Tests</a>
            </li>
            <li>
              <a href="#questions">Questions</a>
            </li>
          </ul>
        </div>
        <div id="installation">
          <h2>Installation</h2>
          <p>${readmeData.installationInstructions}</p>
        </div>
        <div id="usage">
          <h2>Usage</h2>
          <p>${readmeData.usageInformation}</p>
        </div>
        <div id="license">
          <h2>License</h2>
          <p class="text-dark">&copy; ${new Date().getFullYear()} by ${readmeData.contactInfo.github}</p>
        
        </div>
        <div id="contributing">
          <h2>Contributing</h2>
          <p>${readmeData.contributionGuidelines}</p>
        </div>
        <div id="test">
          <h2>Tests</h2>
          <p>${readmeData.testInstructions}</p>
        </div>
        <div id="questions">
          <h2>Questions</h2>
          <p>If you have any questions about the project, 
          the github link and email address of the author are shown below. </p>
          <p>Github: <a href="https://github.com/${readmeData.contactInfo.github}">GitHub</a> & Email: ${readmeData.contactInfo.email}</p>
        </div>
      </main>
    </body>
    </html>
    `;
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, generatePage(data), err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

//Create a function to initialize app
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
                type: 'list',
                name: 'license',
                message: 'Choose a license for this project',
                choices: ['MIT', 'GPL']
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
    const promptUser = projectData => {
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
        ]).then(userInfo => {
            projectData.contactInfo = userInfo;
            return projectData;
        });
    };

    promptProject()
        .then(promptUser)
        .then(readmeData => {
            console.log(readmeData);
            writeToFile('index.html', readmeData);
        });

}

// Function call to initialize app
init();
