import * as matter from "gray-matter";

import { fileList } from "../../../content/fileList";

export const readPosts = async () => {
  console.log("filelist", fileList);
  return await Promise.all(
    fileList.map(file => {
      console.log("files", file);
      return import(`../../../content/${file}.md`).then(res => {
        // @ts-ignore
        const { data } = matter(res.default);
        return {
          title: data.title,
          date: data.date,
          image: data.image,
          writer: data.writer,
        };
      });
    }),
  );
};
