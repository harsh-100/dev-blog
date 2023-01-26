import { NextApiHandler } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const handler: NextApiHandler = (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET": {
      const data = getPostData();
      return res.json({ ok: data });
    }

    default:
      return res.status(404).json({ message: "Not accepted" });
  }
};

const getPostData = () => {
  const folderToReadPath = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(folderToReadPath);

  fileNames.map((oneFile) => {
    const filePathToRead = path.join(folderToReadPath, oneFile);
    const fileData = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    console.log(matter(fileData));
  });

  return fileNames;
};
export default handler;
