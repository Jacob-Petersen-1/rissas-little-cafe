const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createComponentFiles(componentName, componentType) {
  const directoryMap = {
    1: "Layouts",
    2: "Sections",
    3: "Composites",
  };

  const selectedDirectory = directoryMap[componentType];
  if (!selectedDirectory) {
    console.log("Invalid component type");
    return;
  }

  const directory = path.join(
    "src",
    "components",
    selectedDirectory,
    componentName
  );
  const indexPath = path.join(directory, "index.js");
  const componentPath = path.join(directory, `${componentName}.js`);
  const stylesPath = path.join(directory, `${componentName}.styles.js`);

  // Create the directory and parent directories if they don't exist
  fs.mkdirSync(directory, { recursive: true });

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
    `import styled from "@mui/material/styles/styled";\n import { Box } from '@mui/material' \n\nconst ${componentName}Container = styled(Box)(({ theme }) => ({ \n display: "flex", \n}));\n\nexport { ${componentName}Container };`
  );

  console.log(
    `Component "${componentName}" created successfully in ${directory}.`
  );
}

// Prompt the user for the component name and type
rl.question("Enter the name of the component: ", (componentName) => {
  rl.question(
    "Enter the type of the component \n(1) Layout\n(2) Section\n(3) Composite\n",
    (componentType) => {
      // Call the function to create the component files
      createComponentFiles(componentName, componentType);

      // Close the readline interface
      rl.close();
    }
  );
});
