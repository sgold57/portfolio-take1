export default {
  name: "code",
  title: "Code",
  type: "document",
  fields: [
    {
      name: "language",
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'image',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
    },
  ]
}

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     })
  //   },
  // },

