const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to create the component files
function createComponentFiles(componentName) {
  const componentsFolder = path.join("src", "components");
  const componentFolder = path.join(componentsFolder, componentName);
  const indexPath = path.join(componentFolder, "index.js");
  const componentPath = path.join(componentFolder, `${componentName}.jsx`);
  const stylesPath = path.join(componentFolder, `${componentName}.styles.jsx`);

  // Create the components folder if it doesn't exist
  if (!fs.existsSync(componentsFolder)) {
    fs.mkdirSync(componentsFolder, { recursive: true });
  }

  // Create the component folder
  fs.mkdirSync(componentFolder);

  // Create the index.js file
  fs.writeFileSync(
    indexPath,
    `export { default as ${componentName} } from "./${componentName}"`
  );

  // Create the component file
  fs.writeFileSync(
    componentPath,
    `import React from 'react';\nimport PropTypes from 'prop-types';\nimport { ${componentName}Container } from './${componentName}.styles';\n\nconst ${componentName} = () => {\n  return (\n    <>\n      <${componentName}Container>\n        {/* Your component content goes here */}\n      </${componentName}Container>\n    </>\n  );\n};\n\n${componentName}.propTypes = {};\n\nexport default ${componentName};`
  );

  // Create the styles file
  fs.writeFileSync(
    stylesPath,
    `import styled from "@mui/material/styles/styled";\n import {Box} from '@mui/material' \n\nconst ${componentName}Container = styled(Box)(({ theme }) => ({ \n display: "flex", \n}));\n\nexport { ${componentName}Container };`
  );

  console.log(`Component "${componentName}" created successfully.`);
}

// Prompt the user for the component name
rl.question("Enter the name of the component: ", (componentName) => {
  // Call the function to create the component files
  createComponentFiles(componentName);

  // Close the readline interface
  rl.close();
});
