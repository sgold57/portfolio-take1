// What we use to talk to Sanity
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "1mann1nu",
  dataset: "production",
  apiVersion: '2021-03-25', // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
})