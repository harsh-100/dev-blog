import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { ParsedUrlQuery } from "querystring";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const SinglePage: NextPage<Props> = ({ data, content }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-bold text-2xl py-5">{data.title}</h1>
      <div className="prose pb-20">
        <MDXRemote {...content} />
      </div>
      {/* <p>{content}</p> */}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const folderToReadPath = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(folderToReadPath);

  const paths = fileNames.map((oneFile) => {
    const filePathToRead = path.join(folderToReadPath, oneFile);
    const fileData = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    return { params: { postSlug: matter(fileData).data.slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

interface IStaticProps extends ParsedUrlQuery {
  postSlug: string;
}
type Post = {
  content: MDXRemoteSerializeResult;
  data: {
    title: string;
    slug: string;
    meta: string;
  };
};
export const getStaticProps: GetStaticProps<Post> = async (context) => {
  const { params } = context;
  const { postSlug } = params as IStaticProps;
  const filePathToRead = path.join(process.cwd(), "posts/" + postSlug + ".md");
  const fileData = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
  //   const { content, data } = matter(fileData);

  const source = await serialize(fileData, { parseFrontmatter: true });

  return {
    props: {
      content: source,
      data: source.frontmatter,
    },
  };
};
export default SinglePage;
