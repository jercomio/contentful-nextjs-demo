import React from "react";

const about = ({ preview, allPosts }) => {
//   console.log(allPosts);
  const articleContent = (i) => allPosts[i].content.json.content[0].content[0].value;
  return (
    <div className="p-14 my-14 mx-14 px-14 text-justify bg-gray-100 rounded-lg">
        <h2 className="text-center text-2xl pb-14 font-bold">About us</h2>
      <p>{articleContent(3)}</p>
      <p>{articleContent(1)}</p>
      <p>{articleContent(2)}</p>
    </div>
  );
};

export default about;
