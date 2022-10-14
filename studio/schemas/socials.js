export default {
  name: "socials",
  title: "Socials",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "profile_link",
      title: "Profile Link",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
