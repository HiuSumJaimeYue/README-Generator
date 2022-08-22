// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  if(license == 'MIT'){
    return "";
  }
  else if(license == 'Apache'){
    return "";
  }
  else if(license == 'GPL'){
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
  <p>Licensed under the 
  <a href=${renderLicenseLink(license)}>${license}</a>
   license.</p>
  <p>${renderLicenseBadge(license)}</p>
`;
}

//Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  if (!readmeData) {
    return '';
  }

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
        ${renderLicenseSection(readmeData.license)}
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

module.exports = generateMarkdown;
