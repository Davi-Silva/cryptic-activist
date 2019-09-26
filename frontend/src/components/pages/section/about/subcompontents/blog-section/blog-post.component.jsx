import React from "react";

import {
  BlogPostUl,
  BlogPostLi
} from "../../../../../styled-components/about.styled-components";

function BlogPost() {
  const blogPostsContent = [
    {
      title: "Blog Post Title Test",
      content:
        "This is the content of the blog post. WHat a awesome blog post this is.",
      date: "September 06 2019"
    },
    {
      title: "Blog Post Title Test",
      content:
        "This is the content of the blog post. WHat a awesome blog post this is.",
      date: "September 06 2019"
    },
    {
      title: "Blog Post Title Test",
      content:
        "This is the content of the blog post. WHat a awesome blog post this is.",
      date: "September 06 2019"
    },
    {
      title: "Blog Post Title Test",
      content:
        "This is the content of the blog post. WHat a awesome blog post this is.",
      date: "September 06 2019"
    },
    {
      title: "Blog Post Title Test",
      content:
        "This is the content of the blog post. WHat a awesome blog post this is.",
      date: "September 06 2019"
    }
  ];

  return (
    <React.Fragment>
      <BlogPostUl>
        {blogPostsContent.map((blogPost, index) => {
          return (
            <BlogPostLi key={index}>
              <span>{blogPost.date}</span>
              <h3>{blogPost.title}</h3>
              <p>{blogPost.content}</p>
            </BlogPostLi>
          );
        })}
      </BlogPostUl>
    </React.Fragment>
  );
}

export default BlogPost;
