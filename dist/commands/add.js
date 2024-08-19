// import { Command } from "commander";
// import fs from "fs/promises";
// import path from "path";
// import ora from "ora";
// import z from "zod";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const addOptionsSchema = z.object({
//   components: z.array(z.string()).optional(),
//   yes: z.boolean(),
//   overwrite: z.boolean(),
//   cwd: z.string(),
//   all: z.boolean(),
//   path: z.string().optional(),
// });
// export const add = new Command()
//   .name("add")
//   .description("Add a new tool to the project")
//   .argument("<toolName>", "Name of the tool to add")
//   .option("-c, --components <components...>", "Components to add")
//   .option("-y, --yes", "Skip confirmation prompt")
//   .option("-o, --overwrite", "Overwrite existing tool")
//   .option("-a, --all", "Add all tools")
//   .option("-C, --cwd <cwd>", "Working directory", process.cwd())
//   .action(async (toolName: string, opts) => {
//     const spinner = ora(`Adding ${toolName}...`).start();
//     try {
//       const components = opts.components
//         ? opts.components.map((component: string) => component)
//         : [];
//       const options = addOptionsSchema.parse({
//         components,
//         yes: opts.yes || false,
//         overwrite: opts.overwrite || false,
//         cwd: opts.cwd || process.cwd(),
//         all: opts.all || false,
//       });
//       // ... rest of your code
//     } catch (error: any) {
//       console.error(error);
//       spinner.fail(`Failed to add ${toolName}: ${error.message}`);
//     } finally {
//       spinner.succeed(`Added ${toolName} successfully`);
//     }
//   });
import fs from "fs";
import path from "path";
function addComponent(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { componentName, components, yes, overwrite, cwd, all } = options;
        // Check if the component already exists
        const componentPath = path.join(cwd, "utils");
        if (fs.existsSync("utils") && !overwrite) {
            console.log(`Component ${componentName} already exists. Use --overwrite to overwrite.`);
            return;
        }
        console.log(`Creating file: ${componentPath}`);
        try {
            // Create the component directory
            fs.mkdirSync("utils", { recursive: true });
            // Add the component files
            components.forEach((component) => {
                const filePath = path.join(componentPath, `${componentPath}.js`);
                fs.writeFileSync(filePath, `// ${componentPath} component code goes here`);
            });
            console.log(`Component ${componentName} added successfully!`);
        }
        catch (error) {
            console.error(`Error creating component directory: ${error.message}`);
        }
    });
}
export { addComponent };
