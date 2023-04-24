import type { TinaField } from "tinacms";
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "category_",
      label: "Category ",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
  ] as TinaField[];
}
