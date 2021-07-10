export default { 
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "technologiesUsed",
      type: "array",
      of: [{type: 'url'}]
    },
    {
      name: "institution",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "api",
      type: "string",
    },
    // {
    //   name: "projectType",
    //   title: "Project type",
    //   type: "string",
    //   options: {
    //     list: [
    //       // Different dropdown w/ different options
    //       { value: "personal", title: "Personal" },
    //       { value: "client",  title: "Client" },
    //       { value: "school",  title: "School" },
    //     ],
    //   },
    // },
    {
      name: "link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
            type: "string",
        },
      ],
      options: {
        layout: "tags"
      },
    }
  ]
}