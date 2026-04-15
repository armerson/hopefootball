import { defineField, defineType } from "sanity";

export const club = defineType({
  name: "club",
  title: "Club",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "image",
      title: "Image",
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
      name: "isSensitive",
      title: "Sensitive region (neutral copy only)",
      type: "boolean",
      description:
        "When enabled, the public site avoids any optional faith-specific blocks. Keep the main description neutral for these clubs.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", media: "image", country: "country" },
    prepare({ title, media, country }) {
      return {
        title: title || "Club",
        subtitle: country,
        media,
      };
    },
  },
});
