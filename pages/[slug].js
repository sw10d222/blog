import { Row, Col } from "react-bootstrap";
import Layout from "components/layout";
import { getPostBySlug, getPagenatedPosts } from "lib/api";
import Hightlightcode from "components/highlight-code";
import { urlFor } from "lib/api";
import PostHeader from "components/post-header";
import { useRouter } from "next/router";
import layout from "components/layout";
const BlockContent = require("@sanity/block-content-to-react");

export default ({ post }) => {
  const router = useRouter();
  if (router.isFallback)
    return (
      <layout>
        <div>Түр хүлээнэ үү</div>
      </layout>
    );
  return (
    <Layout>
      <Row>
        <Col md="12">
          {/* {<pre>{JSON.stringify(post, null, 2)}</pre>} */}
          <PostHeader post={post}>
            <br />
          </PostHeader>

          <BlockContent
            blocks={post.content}
            serializers={serializers}
            imageOptions={{ w: 420, h: 340, fit: "max" }}
          />
        </Col>
      </Row>
    </Layout>
  );
};
const serializers = {
  types: {
    code: (props) => (
      <Hightlightcode language={props.node.language}>
        {props.node.code}
        <div className="code-filename">{props.node.filename}</div>
      </Hightlightcode>
    ),
    image: (props) => (
      <div className={`blog-image blog-image-${props.node.position}`}>
        <img src={urlFor(props.node).height(400).url()} />
        <div className="code-filename" style={{ textAlign: "center" }}>
          {props.node.alt}
        </div>
      </div>
    ),
  },
};
export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post: post[0],
    },
  };
};
export const getStaticPaths = async ({ params }) => {
  const posts = await getPagenatedPosts(0, 4);

  const data = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths: data,
    fallback: true,
  };
};
