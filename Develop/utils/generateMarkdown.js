// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license)
    return "";
  else
    return `![${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license)
    return "";
  else switch(license) {
    case 'MIT':
      return `[${license}](https://choosealicense.com/licenses/mit/)`;
    case 'APACHE 2.0':
      return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`;
    case 'GPL 3.0':
      return `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, title, userName) {
  if(!license)
  return "";
else 
  return `
##License

${title} is copyright of ${userName} under ${renderLicenseLink(license)}
${renderLicenseBadge(license)}
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
#${data.projectTitle}

##Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${(data.license) ? "- [License](#license)" : "" }
    
##Description

${data.projectDescription}

##Installation

${data.installationInstructions}

##Usage

${data.usageInfo}

##Contributing

${data.contributionGuidelines}

##Tests

${data.testInfo}

##Questions

If you have any questions, you may direct them to ${data.gitHubUser} using the following links:
| Contact | Description |
| --- | --- |
| Name | ${data.userName} |
| E-mail | <${data.emailAddress}> |
| GitHub | <https://github.com/${data.gitHubUser}/> |


${renderLicenseSection(data.license, data.projectTitle, data.userName)}
    
`;
}

module.exports = generateMarkdown;
