import { defineField, defineType } from "sanity";

export const foundation = defineType({
  name: "foundation",
  title: "Foundation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { label: "label", value: "value" },
            prepare({ label, value }) {
              return { title: `${label}: ${value}` };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "Foundation" };
    },
  },
});
