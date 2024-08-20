import { Command } from "commander";
import chalk from "chalk";
import prompts from "prompts";

export const add = new Command()
  .name("add")
  .description("Add a component to your project")
  .argument("<component>", "The component to add")
  .option("-y, --yes", "Skip confirmation prompt", false)
  .action(async (component, options) => {
    try {
      // Simulate a registry lookup
      const availableComponents = ["header", "footer", "sidebar"];

      if (!availableComponents.includes(component)) {
        console.log(chalk.red(`Component ${component} not found.`));
        process.exit(1);
      }

      if (!options.yes) {
        const response = await prompts({
          type: "confirm",
          name: "confirm",
          message: `Add ${component} to your project?`,
          initial: true,
        });

        if (!response.confirm) {
          console.log(chalk.yellow("Operation cancelled."));
          process.exit(0);
        }
      }

      console.log(chalk.green(`Adding ${component} to your project...`));
      // Here, you would add the logic to fetch and add the component.
    } catch (error) {
      console.error(chalk.red("An error occurred:", error));
    }
  });
