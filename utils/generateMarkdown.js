// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  
  # ${data.title}

  ## Table Of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Creits)
  * [License](#license)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.contributors}

  ## License
  ${data.license}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions regarding this app, please visit my Github at [${data.github}](https://github.com/${data.github}). You can also contact me by email at ${data.email}.
`;
}

module.exports = generateMarkdown;