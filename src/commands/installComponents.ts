import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import fetch from "node-fetch";
import ora from "ora";

export async function installComponents(component: string) {
  const templateUrl = `https://raw.githubusercontent.com/milkiyas-web/cli-template/main/template/${component}.ts`;
  const spinner = ora(`Installing ${component}`).start();
  try {
    const response = await fetch(templateUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch the component: ${response.statusText}`);
    }
    const content = await response.text();
    //onst componentDir = path.resolve(targetDir, "utils");
    const srcDir = path.resolve(process.cwd(), "src");
    //Checking for src directory
    const componentDir = path.resolve(srcDir)
      ? path.resolve(srcDir, "utils")
      : path.resolve(process.cwd(), "utils");

    if (!fs.existsSync(componentDir)) {
      await fsPromises.mkdir(componentDir, { recursive: true });
    }

    const componentPath = path.resolve(componentDir, `${component}.ts`);
    await fsPromises.writeFile(componentPath, content);

    spinner.succeed(`Component ${component} installed successfully`);
  } catch (error) {
    spinner.fail(`Failed to install the ${component}`);
    //console.error("Failed to fetch the component template");
  }
}
