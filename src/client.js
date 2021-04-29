// What we use to talk to Sanity

import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "1mann1nu",
  dataset: "production"
})