import { themes } from "./color";

interface themeOptions {
    readonly basetheme: string;
    readonly type: string;
}
function themeGenerator(options: themeOptions) {
    if (!themes.includes(options.basetheme)) {
        console.log("unknown theme " + options.basetheme + "\n");
        console.log("all themes:");
        themes.forEach((theme) => {
            console.log("    " + theme);
        });
        return;
    }

    console.log("generating theme " + options.basetheme);
    for (const [k, v] of Object.entries(options)) {
        console.log(k);
        if (typeof v === "string") {
            continue;
        }
    }
}

export { themeGenerator };
