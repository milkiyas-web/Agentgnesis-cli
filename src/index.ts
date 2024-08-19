// import { add } from "./commands/add.js";

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
  .action(async (componentName: string, opts) => {
    try {
      const components = opts.components
        ? opts.components.map((component: string) => component)
        : [];
      const options = {
        componentName,
        components,
        yes: opts.yes || false,
        overwrite: opts.overwrite || false,
        cwd: opts.cwd || process.cwd(),
        all: opts.all || false,
      };

      await addComponent(options);
      console.log(`Component ${componentName} added successfully!`);
    } catch (error: any) {
      console.error(`Error adding component: ${error.message}`);
    }
  });

program.parse(process.argv);
