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
      { icon: "x", link: "https://x.com/ruxlang", ariaLabel: "X" },
      {
        icon: "bluesky",
        link: "https://ruxlang.bsky.social",
        ariaLabel: "Bluesky",
      },
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
      /*{
        icon: "reddit",
        link: "https://www.reddit.com/r/ruxlang/",
        ariaLabel: "Reddit",
      },*/
      {
        icon: "discord",
        link: "https://discord.com/invite/uvSHjtZSVG",
        ariaLabel: "Discord",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M19.2,1.2c2.65,0,4.8,2.15,4.8,4.8v9.6c0,2.65-2.15,4.8-4.8,4.8h-3.1l-3.25,3.25c-.43.43-1.11.47-1.58.1l-.11-.1-3.25-3.25h-3.1c-2.56,0-4.67-2.01-4.79-4.56v-.24s0-9.6,0-9.6C0,3.35,2.15,1.2,4.8,1.2h14.4ZM14.4,12h-7.2c-.66,0-1.2.54-1.2,1.2s.54,1.2,1.2,1.2h7.2c.66,0,1.2-.54,1.2-1.2s-.54-1.2-1.2-1.2M16.8,7.2H7.2c-.66,0-1.2.54-1.2,1.2s.54,1.2,1.2,1.2h9.6c.66,0,1.2-.54,1.2-1.2s-.54-1.2-1.2-1.2" /></svg>',
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
    math: true,
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    languages: [ruxGrammar],
  },
});
