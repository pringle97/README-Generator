// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
-------------------------------
## GitHub Username:
${data.username}

##GitHub Repository name: 
${data.repoName}

## Table of Contents
  Description
  Installation
  Usage
  Tests
  License
  Contributing
  Questions

##  Description: 
${data.description}
  
##  Installation: 
${data.installation}

##  Usage: 
${data.usage}

##  Tests: 
${data.tests}

##  License: 
${data.license}

##  Contributing: 
${data.contributing}

##  Questions: 
If you have any questions about my project, please send me an email at ${data.email}
`;
}

module.exports = generateMarkdown;
