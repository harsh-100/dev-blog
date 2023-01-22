import { NextPage } from "next";

interface Props {
  title: string;
  desc: string;
}

const BlogCard: NextPage<Props> = ({ title, desc }) => {
  return (
    <div className="bg-green-100 p-5">
      <h1 className="text-gray-900 text-3xl font-semibold"> {title}</h1>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
};

export default BlogCard;
