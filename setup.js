const contentful = require("contentful-management");
const spaceImport = require("contentful-import");
const exportFile = require("./contentful/exports.json");
const inquirer = require("inquirer");
const chalk = require("chalk");
const path = require("path");
const { writeFileSync } = require("fs");

console.log(`
  To set up this project you need to provide your Space ID
  and the belonging API access tokens.

  You can find all the needed information in your Contentful space under:

  ${chalk.yellow(
    `app.contentful.com ${chalk.red("->")} Space Settings ${chalk.red(
      "->"
    )} API keys`
  )}

  The ${chalk.green("Content Management API Token")}
    will be used to import and write data to your space.

  The ${chalk.green("Content Delivery API Token")}
    will be used to retrieve published content items.

    The ${chalk.green("Content Preview API Token")}
    will be used to retrieve published and unpublished content items.

  Ready? Let's do it! 🎉
`);

const questions = [
  {
    name: "spaceId",
    message: "Your Space ID",
    validate: (input) =>
      /^[a-z0-9]{12}$/.test(input) ||
      "Space ID must be 12 lowercase characters",
  },
  {
    name: "accessToken",
    message: "Your Content Delivery API access token",
  },
  {
    name: "previewToken",
    message: "Your Content Preview API access token",
  },
  {
    name: "previewSecret",
    message: "A secret word for Content Preview!",
  },
  {
    name: "managementToken",
    message: "Your Content Management API access token",
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("Writing config file...");
    const spaceId = answers.spaceId ? answers.spaceId : "";
    const accessToken = answers.accessToken ? answers.accessToken : "";
    const previewToken = answers.previewToken ? answers.previewToken : "";
    const previewSecret = answers.previewSecret ? answers.previewSecret : "";
    const managementToken = answers.managementToken
      ? answers.managementToken
      : ""
      ? answers.managementToken
      : "";

    const configFiles = [`config.js`].map((file) =>
      path.join(__dirname, "components", file)
    );
    const fileContents =
      [
        `// All environment variables will be sourced`,
        `// Do NOT commit this file to source control`,
        `module.exports = {`,
        `space_id: '${spaceId}',`,
        `delivery_token: '${accessToken}',`,
        `preview_token: '${previewToken}',`,
        `previewSecret: '${previewSecret}',`,
        `environment: 'master'`,
        `}`,
      ].join("\n") + "\n";

    configFiles.forEach((file) => {
      writeFileSync(file, fileContents, "utf8");
      console.log(`Config file ${chalk.yellow(file)} written`);
    });
    return { spaceId, managementToken, accessToken };
  })
  .then((managementConfig) => {
    const spaceId = managementConfig.spaceId ? managementConfig.spaceId : "";
    const managementToken = managementConfig.managementToken
      ? managementConfig.managementToken
      : "";
    const accessToken = managementConfig.accessToken
      ? managementConfig.accessToken
      : "";

    // console.log(managementConfig);
    if (spaceId && managementToken) {
      spaceImport({
        spaceId: spaceId,
        managementToken: managementToken,
        content: exportFile,
      })
        .then(() => {
          console.log(
            `All set! Make sure to give your API key access to your new demo environment. You can now run ${chalk.yellow(
              "npm run dev"
            )} and bring up the app in a browser ${chalk.yellow(
              "http://localhost:9009"
            )} .`
          );
        })
        .catch((err) => {
          console.log(
            `An Error Occured!${chalk.yellow(err)} 
       .`
          );
        });
    } else {
      console.log(
        `Missing Management token! '
            )} Please Try Again ${chalk.red("ERROR")} .`
      );
    }
  });
