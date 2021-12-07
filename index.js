const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
let axios = require('axios')
const fs = require('fs');
const util = require('util');

// array of questions for user
const questions = [
  {
    type: `input`,
    name: `username`,
    message: `Enter your GitHub username`
  },
  {
    type: `input`,
    name: `repoName`,
    message: `Enter your repository name`
  },
  {
    type: `input`,
    name: `title`,
    message: `Enter the title of your project`
  },
  {
    type: `input`,
    name: `description`,
    message: `Write a description for your project`
  },
  {
    type: `input`,
    name: `installation`,
    message: `Explain how to install your application (if applicable)`
  },
  {
    type: `input`,
    name: `usage`,
    message: `Provide examples of how to use your application`
  },
  {
    type: `input`,
    name: `contributing`,
    message: `provide guidelines for how other developers can contribute to the project (if applicable)`
  },
  {
    type: `input`,
    name: `tests`,
    message: `Provide any tests or examples of how to run your application (if applicable)`
  },
  {
    type: `input`,
    name: `email`,
    message: `Enter your email `
  },
  {
    type: 'list',
    name: 'license',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
  },
];

inquirer.prompt

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your README.md file has been generated")
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((answer) => {
      writeToFile("readMeFile.md", generateMarkdown(answer))
    })
    .catch((error) => {
      if (error) {
        console.log(error)
      }
    })
}

// function call to initialize program
init();