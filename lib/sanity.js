const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  //   apiVersion: "2019-01-29", // use current UTC date - see "specifying API version"!
  //   token: "sanity-auth-token", // or leave blank for unauthenticated usage
  useCdn: process.NODE_ENV === "production", // `false` if you want to ensure fresh data
});
export default client;
