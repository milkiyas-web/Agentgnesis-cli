// import { Command } from "commander";
// import chalk from "chalk";
// import prompts from "prompts";
// import path from "path";
// import { installComponents } from "./commands/installComponents.js";

// console.log("ClI has started");
// export const add = new Command();
//  program
//   .name("add")
//   .description("Add a component to your project")
//   .argument("<component>", "The component to add")
//   .option("-y, --yes", "Skip confirmation prompt", false)
//   .action(async (component, options) => {
//     console.log("Add command has been called");
//     try {
//       const targetDir = path.resolve(
//         process.cwd(),
//         "src/components",
//         component
//       );

//       if (!options.yes) {
//         const response = await prompts({
//           type: "confirm",
//           name: "confirm",
//           message: `Add ${component} to your project?`,
//           initial: true,
//         });

//         if (!response.confirm) {
//           console.log(chalk.yellow("Operation cancelled."));
//           return;
//         }
//       }

//       await installComponents(component, targetDir);
//       console.log(chalk.green(`Component ${component} added to ${targetDir}.`));
//     } catch (error) {
//       console.error(chalk.red("An error occurred:", error));
//     }
//     console.log("Add command has been completed");
//   });
// // add.parse(process.argv);
// program.parse(process.argv)
// console.log("CLI has ended");
import { Command } from "commander";
import chalk from "chalk";
import prompts from "prompts";
import path from "path";
import { installComponents } from "./commands/installComponents.js";
import fs from "fs";
const program = new Command();

program
  .name("agentgenesis")
  .description("CLI tool to manage AI components")
  .version("1.0.0");

program
  .command("add <component>")
  .description("Add a component to your project")
  .option("-y, --yes", "Skip confirmation prompt", false)
  .action(async (component, options) => {
    console.log("Add command has been called");

    try {
      //const targetDir = path.resolve(process.cwd(), "src");
      // const componentDir = fs.existsSync(srcDir)
      if (!options.yes) {
        const response = await prompts({
          type: "confirm",
          name: "confirm",
          message: `Add ${component} to your project?`,
          initial: true,
        });

        if (!response.confirm) {
          console.log(chalk.yellow("Operation cancelled."));
          return;
        }
      }

      await installComponents(component);
      // console.log(
      //   chalk.green(
      //     `Component ${component} has been successfully added to your project.`
      //   )
      // );
    } catch (error) {
      console.error(chalk.red("An error occurred:", error));
    }

    //console.log("Add command has been completed");
  });

program.parse(process.argv);

//console.log("CLI has ended");
