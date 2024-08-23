var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import fetch from "node-fetch";
import ora from "ora";
export function installComponents(component) {
    return __awaiter(this, void 0, void 0, function* () {
        const templateUrl = `https://raw.githubusercontent.com/milkiyas-web/cli-template/main/template/${component}.ts`;
        const spinner = ora(`Installing ${component}`).start();
        try {
            const response = yield fetch(templateUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch the component: ${response.statusText}`);
            }
            const content = yield response.text();
            //onst componentDir = path.resolve(targetDir, "utils");
            const srcDir = path.resolve(process.cwd(), "src");
            //Checking for src directory
            const componentDir = path.resolve(srcDir)
                ? path.resolve(srcDir, "utils")
                : path.resolve(process.cwd(), "utils");
            if (!fs.existsSync(componentDir)) {
                yield fsPromises.mkdir(componentDir, { recursive: true });
            }
            const componentPath = path.resolve(componentDir, `${component}.ts`);
            yield fsPromises.writeFile(componentPath, content);
            spinner.succeed(`Component ${component} installed successfully`);
        }
        catch (error) {
            spinner.fail(`Failed to install the ${component}`);
            //console.error("Failed to fetch the component template");
        }
    });
}
