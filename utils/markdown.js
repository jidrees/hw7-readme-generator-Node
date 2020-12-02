// function to generate markdown for README
function generate_markdown(data) {
  return `# ${data.title}

## About the Project
${data.about_project}

## Contact Programmer

${data.programmer}
${data.email}
${data.author_position}

## Contents

-[Technologies used](#technologies-used)
-[Key files in the repository](#key-files-in-the-repository)
-[Packages used](#packages-used)
-[Programming Competencies](#programming-competencies)
-[Installation](#installation)
-[Usage](#usage)
-[Testing](#testing)
-[License](#license)
-[Copyright](#copyright)


## Technologies used

${data.techs_used}

## Packages used

${data.packages_used}

## Programming Competencies

${data.skills_list}

## Key files in the repository

${data.file_list}


## Installation

For installation of the dependies, please run the following command in the terminal
\`\`\`
${data.to_install}
\`\`\`

## Usage

To start the application, please type the following command in the terminal

\`\`\`
${data.to_use}
\`\`\`


## Testing

For running the tests on application, please run the following commad

\`\`\`
${data.to_test}
\`\`\`


## License 

![License badge](https://img.shields.io/badge/license-${data.license}-blue.svg)


## Copyright 
${data.copyright}


`;
}

module.exports = generate_markdown;
