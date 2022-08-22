// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  if (license == 'MIT') {
    return `![MIT-badge](https://img.shields.io/badge/License-MIT-green.svg)
    `;
  }
  else if (license == 'Apache 2.0') {
    return `![Apache2-badge](https://img.shields.io/badge/license-Apache%202-blue.svg)
  `;
  }
  else if (license == 'GPL') {
    return `![GPL-badge](https://img.shields.io/badge/License-GPL-blue.svg)
  `;
  } else {
    return "";
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  if (license == 'MIT') {
    return "https://choosealicense.com/licenses/mit/";
  }
  else if (license == 'Apache 2.0') {
    return "https://choosealicense.com/licenses/apache-2.0/";
  }
  else if (license == 'GPL') {
    return "https://choosealicense.com/licenses/gpl-3.0/";
  } else {
    return "";
  }
}

//Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return ` 
Licensed under the 
[${license}](${renderLicenseLink(license)}) 
license.
`;
}

//Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  if (!readmeData) {
    return '';
  }

  return `
# ${readmeData.name} · ${renderLicenseBadge(readmeData.license)}              

## Description       
${readmeData.description}         

## Table of Contents               
-[Installation](#installation)          
-[Usage](#usage)          
-[License](#license)          
-[Contributing](#contributing)          
-[Tests](#tests)        
-[Questions](#questions)        

## Installation         
${readmeData.installationInstructions}               

## Usage         
${readmeData.usageInformation}

## License         
&copy; ${new Date().getFullYear()} by ${readmeData.contactInfo.github}         
${renderLicenseSection(readmeData.license)}         

## Contributing         
${readmeData.contributionGuidelines}         

## Tests         
${readmeData.testInstructions}

## Questions         
If you have any questions about the project, 
the github link and email address of the author are shown below.                   
Github: [Github](https://github.com/${readmeData.contactInfo.github}) 
& Email: [${readmeData.contactInfo.email}](mailto:${readmeData.contactInfo.email})
</a>
`;
}

module.exports = generateMarkdown;
