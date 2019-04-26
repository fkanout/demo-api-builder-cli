const inquirer = require("inquirer");
const ora = require("ora");
process.stdout.write("\033c");
console.log("API Builder X 🚀 🔥");
const languages = {
  type: "list",
  name: "In what language you will write your API?",
  choices: ["EcmaScript", "TypeScript"]
};
const features = {
  type: "checkbox",
  name: "Check the features that you would like to include in your API",
  choices: [
    "Routes",
    "Logs",
    "Static files",
    "GrapheQL",
    "I/O Validation",
    "Helmet Security",
    "Tests suite (recommended)"
  ],
  default: ["Routes"]
};

const dbConnector = {
  type: "list",
  name: "What kind of DB you want to connect your API to",
  choices: [
    "Mongo connector",
    "MSSQL Connector",
    "MySQL connector",
    "Oracle connector",
    "None"
  ]
};

const frontEnd = {
  type: "list",
  name: "Does your API serve a Frontend?",
  choices: ["NO", "SSR-React", "CSR-React"]
};
inquirer.prompt([languages, features, dbConnector, frontEnd]).then(answers => {
  const spinner = ora("Creating your API ").start();
  setTimeout(() => {
    spinner.color = "yellow";
    spinner.text = "Adding features";
  }, 2000);
  setTimeout(() => {
    spinner.stop();
    console.log("it's a trivial demo, nothing is created, thanks you!");
    process.exit(0);
  }, 4000);
});
