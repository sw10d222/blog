const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.NODE_ENV === "production",
});
export const previewClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token:
    "sk54SDyB8ed4cN27dvT2g4tvBhanPeu1Rwjr2tA8fokZJ3MXDpcixRJqAvvCIm6nlgVkS0JAnsTFYrfTgF3WlJkYNnit7pYtizMXzDBIK8QHy4PsIwjRClHcP7KqewZsSdw9WiAN3cZJIobFDYxgObAXDHLYhJQHSdjBKRjp054yafsCkXOK",
});

export default client;
