// import { Command } from "commander";
// import fs from "fs/promises";
// import path from "path";
// import ora from "ora";
// import z from "zod";

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

async function addComponent(options: {
  componentName: string;
  components: string[];
  yes: boolean;
  overwrite: boolean;
  cwd: string;
  all: boolean;
}) {
  const { componentName, components, yes, overwrite, cwd, all } = options;

  // Check if the component already exists
  const componentPath = path.join(cwd, "utils");
  if (fs.existsSync("utils") && !overwrite) {
    console.log(
      `Component ${componentName} already exists. Use --overwrite to overwrite.`
    );
    return;
  }
  console.log(`Creating file: ${componentPath}`);
  try {
    // Create the component directory
    fs.mkdirSync("utils", { recursive: true });
    // Add the component files
    components.forEach((component) => {
      const filePath = path.join(componentPath, `${componentPath}.js`);
      fs.writeFileSync(
        filePath,
        `// ${componentPath} component code goes here`
      );
    });

    console.log(`Component ${componentName} added successfully!`);
  } catch (error: any) {
    console.error(`Error creating component directory: ${error.message}`);
  }
}

export { addComponent };
