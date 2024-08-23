// import { Command } from "commander";
// import chalk from "chalk";
// import prompts from "prompts";
// import path from "path";
// import { installComponents } from "./commands/installComponents.js";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { installComponents } from "./commands/installComponents.js";
const program = new Command();
program
    .name("agentgenesis")
    .description("CLI tool to manage AI components")
    .version("1.0.0");
program
    .command("add <component>")
    .description("Add a component to your project")
    .option("-y, --yes", "Skip confirmation prompt", false)
    .action((component, options) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Add command has been called");
    try {
        //const targetDir = path.resolve(process.cwd(), "src");
        // const componentDir = fs.existsSync(srcDir)
        if (!options.yes) {
            const response = yield prompts({
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
        yield installComponents(component);
        // console.log(
        //   chalk.green(
        //     `Component ${component} has been successfully added to your project.`
        //   )
        // );
    }
    catch (error) {
        console.error(chalk.red("An error occurred:", error));
    }
    //console.log("Add command has been completed");
}));
program.parse(process.argv);
//console.log("CLI has ended");
