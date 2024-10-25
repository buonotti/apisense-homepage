// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import catppuccin from "starlight-theme-catppuccin";

// https://astro.build/config
export default defineConfig({
    site: "https://apisense.dev",
    integrations: [
        starlight({
            title: "Apisense",
            customCss: ["./src/styles/tailwind.css"],
            editLink: {
                baseUrl: "https://github.com/buonotti/apisense-homepage/edit/main/",
            },
            social: {
                github: "https://github.com/buonotti/apisense",
            },
            components: {
              ThemeSelect: "./src/overrides/ThemeSelect.astro",
            },
            sidebar: [
                {
                    label: "About Apisense",
                    link: "about",
                },
                {
                    label: "Get Started",
                    autogenerate: {directory: "get-started"},
                },
                {
                    label: "Configuration",
                    autogenerate: {directory: "configuration"},
                },
                {
                    label: "Definitions",
                    autogenerate: {directory: "definitions"},
                },
                {
                    label: "Validators",
                    autogenerate: {directory: "validators"},
                },
                {
                    label: "Development",
                    autogenerate: {directory: "development"},
                },
            ],
            plugins: [
                catppuccin({dark: "mocha-red", light: "latte-red"})
            ]
        }),
        tailwind({
            applyBaseStyles: false,
        }), catppuccin()
    ],
});

