var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from "fs/promises";
import path from "path";
export function installComponent(component, targetDir) {
    return __awaiter(this, void 0, void 0, function* () {
        const componentDir = path.join(__dirname, "..", "components", component);
        if (!componentDir) {
            throw new Error(`Component directory for ${component} not found.`);
        }
        yield fs.mkdir(targetDir, { recursive: true });
        const files = yield fs.readdir(componentDir);
        for (const file of files) {
            const srcPath = path.join(componentDir, file);
            const destPath = path.join(targetDir, file);
            yield fs.copyFile(srcPath, destPath);
        }
    });
}
