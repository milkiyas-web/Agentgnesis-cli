import { Command } from "commander";
import chalk from "chalk";
import prompts from "prompts";
import path from "path";
import { installComponent } from "../src/commands/installComponent";

export const add = new Command()
  .name("add")
  .description("Add a component to your project")
  .argument("<component>", "The component to add")
  .option("-y, --yes", "Skip confirmation prompt", false)
  .action(async (component, options) => {
    try {
      const targetDir = path.resolve(
        process.cwd(),
        "src/components",
        component
      );

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

      await installComponent(component, targetDir);
      console.log(chalk.green(`Component ${component} added to ${targetDir}.`));
    } catch (error) {
      console.error(chalk.red("An error occurred:", error));
    }
  });
