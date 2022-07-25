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
  
  # ${data.title} ![License badge](https://camo.githubusercontent.com/55056d83628fa4aae93c5790e8641e6d6998b138dae009c0854f4efaae440520/68747470733a2f2f696d672e736869656c64732e696f2f707970692f6c2f436f766572616765)

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
  This application is covered under ${data.license}.

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions regarding this app, please visit my Github at [${data.github}](https://github.com/${data.github}). You can also contact me by email at ${data.email}.
`;
}

module.exports = generateMarkdown;