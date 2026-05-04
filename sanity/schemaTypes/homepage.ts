import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero subtitle",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroTitleAccent",
      title: "Hero title accent (optional)",
      type: "string",
      description:
        "Shown after the main title in the accent colour (e.g. “changes lives”). Leave empty for a single-line title.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Sections below the hero",
      description:
        "Optional blocks of title + text, shown directly under the hero on the home page. Use Add item for each block. Main homepage sections are still edited in code unless we move them into Sanity.",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "text",
              rows: 6,
            }),
          ],
          preview: {
            select: { title: "title" },
            prepare({ title }) {
              return { title: title || "Section" };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage" };
    },
  },
});
