import fs from "fs/promises";
import path from "path";

export async function installComponent(component: string, targetDir: string) {
  const componentDir = path.join(__dirname, "..", "components", component);

  if (!componentDir) {
    throw new Error(`Component directory for ${component} not found.`);
  }

  await fs.mkdir(targetDir, { recursive: true });

  const files = await fs.readdir(componentDir);

  for (const file of files) {
    const srcPath = path.join(componentDir, file);
    const destPath = path.join(targetDir, file);

    await fs.copyFile(srcPath, destPath);
  }
}
