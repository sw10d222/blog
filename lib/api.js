import client from "lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};
export const getAllPosts = async () => {
  const posts = await client.fetch(
    `*[_type=="post"]{_createdAt,title,subtitle,date,'image':cover_image.asset->url,'slug':slug.current,'publisher':publisher->{title,'picture':picture.asset->url}}`
  );
  return posts;
};

export const getPostBySlug = async (slug) => {
  const post = await client.fetch(
    `*[_type=="post" && slug.current==$slug]{_createdAt,title,subtitle,date,content[]{...,'asset':asset->},cover_image ,'slug':slug.current,'publisher':publisher->{title,'picture':picture.asset->url}}`,
    { slug }
  );
  return post;
};
