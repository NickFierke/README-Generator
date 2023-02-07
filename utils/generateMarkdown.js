
function renderLicenseBadge(license) {
  if (!license) return '';

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL-3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache-2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}


function renderLicenseLink(license) {
  if (!license) return '';

  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GPL-3.0':
      return '[GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache-2.0':
      return '[Apache-2.0 License](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}


function renderLicenseSection(license) {
  if (!license) return '';

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `## License

This project is licensed under the ${link}.

${badge}`;
}


const generateMarkdown = (data) => {
  return `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}

## Contact
Github: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
};

module.exports = generateMarkdown;

