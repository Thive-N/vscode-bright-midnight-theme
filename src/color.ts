import fs from "fs";
import path from "path";

let files: string[] = fs.readdirSync("./src/themes/").map((file) => {
    return path.parse(file).name;
});

export { files as themes };
