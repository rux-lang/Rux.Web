import { defineConfig } from "vitepress";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

// Load Rux grammar for syntax highlighting
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ruxGrammar = JSON.parse(
  readFileSync(
    path.resolve(__dirname, "./grammars/rux.tmLanguage.json"),
    "utf-8"
  )
);
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
  sitemap: {
    hostname: "https://rux-lang.dev",
  },

  head: [
    [
      "script",
      {
        defer: "true",
        src: "https://cloud.umami.is/script.js",
        "data-website-id": "c3db4674-752d-4334-a22b-6deba2e4ecfb",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    siteTitle: "Rux",

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/introduction" },
      { text: "Packages", link: "/packages" },
      { text: "FAQ", link: "/faq" },
      {
        text: "Changelog",
        link: "https://github.com/rux-lang/Rux/blob/main/CHANGELOG.md",
      },
    ],

    sidebar: [
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

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/rux-lang/Rux",
        ariaLabel: "GitHub",
      },
      { icon: "x", link: "https://x.com/ruxlang", ariaLabel: "X" },
      {
        icon: "bluesky",
        link: "https://bsky.app/profile/ruxlang.bsky.social",
        ariaLabel: "Bluesky",
      },
      {
        icon: "mastodon",
        link: "https://mastodon.social/@ruxlang",
        ariaLabel: "Mastodon",
      },
      {
        icon: "discord",
        link: "https://discord.com/invite/uvSHjtZSVG",
        ariaLabel: "Discord",
      },
      {
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>',
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
