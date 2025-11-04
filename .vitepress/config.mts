import { defineConfig } from "vitepress";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

// Load Rux grammar for syntax highlighting
const dirname = path.dirname(fileURLToPath(import.meta.url));
const filename = path.resolve(dirname, "./grammars/rux.tmLanguage.json");
const ruxGrammar = JSON.parse(readFileSync(filename, "utf-8"));

// Set aliases for the Rux grammar
ruxGrammar.aliases = ["rux"];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rux Programming Language",
  description:
    "Fast, compiled, strongly typed, multi-paradigm, general-purpose",
  srcDir: "./src",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: "https://rux-lang.dev" },

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "any" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "script",
      {
        defer: "true",
        src: "https://cloud.umami.is/script.js",
        "data-website-id": "c3db4674-752d-4334-a22b-6deba2e4ecfb",
      },
    ],
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Rux",

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/introduction" },
      { text: "Packages", link: "/packages" },
      //{ text: "Blog", link: "/blog/getting-started" },
      { text: "FAQ", link: "/faq" },
      {
        text: "Changelog",
        link: "https://github.com/rux-lang/Rux/blob/main/CHANGELOG.md",
      },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "Reference",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/docs/introduction" },
            { text: "Getting Started", link: "/docs/getting-started" },
            { text: "Primitive types", link: "/docs/primitive-types" },
          ],
        },
      ],
      "/blog/": [
        {
          text: "2025",
          collapsed: false,
          items: [{ text: "Getting Started", link: "/blog/getting-started" }],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/rux-lang",
        ariaLabel: "GitHub",
      },
      {
        icon: "bluesky",
        link: "https://ruxlang.bsky.social",
        ariaLabel: "Bluesky",
      },
      { icon: "x", link: "https://x.com/ruxlang", ariaLabel: "X" },
      {
        icon: "mastodon",
        link: "https://mastodon.social/@ruxlang",
        ariaLabel: "Mastodon",
      },
      {
        icon: "telegram",
        link: "https://t.me/ruxlang",
        ariaLabel: "Telegram",
      },
      {
        icon: "discord",
        link: "https://discord.com/invite/uvSHjtZSVG",
        ariaLabel: "Discord",
      },
      {
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>',
        },
        link: "https://github.com/rux-lang/Rux/discussions",
        ariaLabel: "Discussions",
      },
    ],

    externalLinkIcon: true,

    editLink: {
      pattern: "https://github.com/rux-lang/Rux.Web/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "medium",
      },
    },

    footer: {
      message:
        'Released under the <a href="https://github.com/rux-lang/Rux/blob/main/LICENSE">MIT License</a>',
      copyright:
        'Copyright © 2025 <a href="https://github.com/musicvano">Ivan Muzyka</a>',
    },
  },

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    languages: [ruxGrammar],
  },
});
