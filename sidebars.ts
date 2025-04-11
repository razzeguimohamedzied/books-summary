import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: "doc",
      id: "introduction",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Religion",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "doc",
          id: "religion/لانك-الله-رحلة-الى-السماء-السابعة",
          label: "لأنك الله: رحلة إلى السماء السابعة - علي بن جابر الفيفي",
        },
        {
          type: "doc",
          id: "religion/لكنود",
          label: "لكنود - إسلام جمال",
        },
      ],
    },
    {
      type: "category",
      label: "Software Development",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "doc",
          id: "software-development/clean-code",
          label:
            "Clean Code - A handbook of agile software craftsmanship - Robert C. Martin",
        },
        {
          type: "doc",
          id: "software-development/refactoring",
          label:
            "Refactoring - Improving the Design of Existing Code - Martin Fowler",
        },
      ],
    },
    {
      type: "category",
      label: "Psychology & Behavior",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "doc",
          id: "psychology-and-behavior/فن-اللامبالاة",
          label: "فن اللامبالاة - مارك مانسون",
        },
        {
          type: "doc",
          id: "psychology-and-behavior/العادات-الذرية",
          label: "العادات الذرية - جيمس كلير",
        },
      ],
    },
  ],
};

export default sidebars;
