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
    {
      name: "link",
      type: "url",
    },
    {
      name: "images",
      type: "array",
      of: [{type: 'image'}]
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