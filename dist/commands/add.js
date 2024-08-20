var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Command } from "commander";
import chalk from "chalk";
import prompts from "prompts";
export const add = new Command()
    .name("add")
    .description("Add a component to your project")
    .argument("<component>", "The component to add")
    .option("-y, --yes", "Skip confirmation prompt", false)
    .action((component, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Simulate a registry lookup
        const availableComponents = ["header", "footer", "sidebar"];
        if (!availableComponents.includes(component)) {
            console.log(chalk.red(`Component ${component} not found.`));
            process.exit(1);
        }
        if (!options.yes) {
            const response = yield prompts({
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
    }
    catch (error) {
        console.error(chalk.red("An error occurred:", error));
    }
}));
