import BlogCard from "@/components/BlogCard";
import { NextPage } from "next";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className=" max-w-3xl mx-auto  rounded space-y-5">
      <BlogCard
        title="my first blog"
        desc="  ipsum dolor sit amet, consectetur adipisicing elit. Nulla sunt doloribus quos necessitatibus nam dolore. Corrupti eaque nam illum facere.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sunt doloribus quos necessitatibus nam dolore. Corrupti eaque nam illum facere "
      />
      <BlogCard
        title="my first blog"
        desc="  ipsum dolor sit amet, consectetur adipisicing elit. Nulla sunt doloribus quos necessitatibus nam dolore. Corrupti eaque nam illum facere.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sunt doloribus quos necessitatibus nam dolore. Corrupti eaque nam illum facere "
      />
      <BlogCard
        title="my first blog"
        desc="  ipsum dolor sit amet, consectetur adipisicing elit. Nulla sunt doloribus quos necessitatibus nam dolore. Corrupti eaque nam illum facere.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sunt doloribus quos necessitatibus nam dolore. Corrupti eaque nam illum facere "
      />
    </div>
  );
};

export default Blogs;
