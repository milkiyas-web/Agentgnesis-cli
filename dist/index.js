// import { add } from "./commands/add.js";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// //console.log("Module add imported successfully"); // Add this line for debugging
// import { Command } from "commander";
// process.on("SIGINT", () => process.exit(0));
// process.on("SIGTERM", () => process.exit(0));
// async function main() {
//   const program = new Command()
//     .name("agentgenesis")
//     .description("add AI components to your project")
//     .version("1.0.0", "-v, --version", "display the version number");
//   program.addCommand(add);
//   program.parse();
// }
// main().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });
import { program } from "commander";
import { addComponent } from "./commands/add.js";
program.name("agentgenesis").description("AgentGenesis CLI").version("1.0.0");
program
    .command("add <componentName>")
    .description("Add an AgentGenesis component to your project")
    .option("-c, --components <components...>", "Components to add")
    .option("-y, --yes", "Skip confirmation prompt")
    .option("-o, --overwrite", "Overwrite existing component")
    .option("-a, --all", "Add all components")
    .option("-C, --cwd <cwd>", "Working directory", process.cwd())
    .action((componentName, opts) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const components = opts.components
            ? opts.components.map((component) => component)
            : [];
        const options = {
            componentName,
            components,
            yes: opts.yes || false,
            overwrite: opts.overwrite || false,
            cwd: opts.cwd || process.cwd(),
            all: opts.all || false,
        };
        yield addComponent(options);
        console.log(`Component ${componentName} added successfully!`);
    }
    catch (error) {
        console.error(`Error adding component: ${error.message}`);
    }
}));
program.parse(process.argv);
