import BlogCard from "@/components/BlogCard";
import { InferGetStaticPropsType, NextPage } from "next";

interface PostApiResponse {
  data: {
    title: string;
    meta: string;
    slug: string;
  }[];
}

export const getStaticProps = async () => {
  const { data }: PostApiResponse = await fetch(
    "http://localhost:3000/api/posts"
  ).then((data) => data.json());
  return {
    props: { posts: data },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div className=" max-w-3xl mx-auto  rounded space-y-5">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          desc={post.meta}
          slug={post.slug}
        />
      ))}
    </div>
  );
};

export default Blogs;
