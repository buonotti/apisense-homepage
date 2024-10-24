// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: "https://apisense.dev",
    integrations: [starlight({
        title: 'Apisense',
        editLink: {
            baseUrl: "https://github.com/buonotti/apisense-homepage/edit/main/"
        },
        social: {
            github: 'https://github.com/buonotti/apisense',
        },
        sidebar: [
            {
              label: "About Apisense",
                link: "about"
            },
            {
                label: "Get Started",
                autogenerate: {directory: "get-started"},
            },
            {
                label: 'Configuration',
                autogenerate: {directory: 'configuration'},
            },
            {
                label: 'Definitions',
                autogenerate: {directory: 'definitions'},
            },
            {
                label: 'Validators',
                autogenerate: {directory: 'validators'},
            },
            {
                label: 'Development',
                autogenerate: {directory: 'development'},
            },
        ],
    })],
});