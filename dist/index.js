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
import path from "path";
import { installComponent } from "../src/commands/installComponent";
export const add = new Command()
    .name("add")
    .description("Add a component to your project")
    .argument("<component>", "The component to add")
    .option("-y, --yes", "Skip confirmation prompt", false)
    .action((component, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const targetDir = path.resolve(process.cwd(), "src/components", component);
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
        yield installComponent(component, targetDir);
        console.log(chalk.green(`Component ${component} added to ${targetDir}.`));
    }
    catch (error) {
        console.error(chalk.red("An error occurred:", error));
    }
}));
