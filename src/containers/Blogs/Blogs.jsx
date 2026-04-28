"use client";

import React, {useState, useEffect} from "react";
import {blogSection} from "../../portfolio";
import styles from "./Blogs.module.scss";
import BlogCard from "../../components/BlogCard/BlogCard";
import {getMediumBlogs} from "../../client/mediumBlogs";
import {extractTextContentFromHtml} from "../../utils";

function Blogs() {
  const [mediumBlogs, setMediumBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const blogs = await getMediumBlogs();
      setMediumBlogs(blogs);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="main" id="blogs">Loading blogs...</div>;
  }

  return (
    <div className="main" id="blogs">
      <div>
        <h1 className={styles.headerText}>{blogSection.title}</h1>
        <p className={`subTitle ${styles.subtitle}`}>{blogSection.subtitle}</p>
      </div>
      <div className={styles.mainDiv}>
        <div className={styles.textDiv}>
          {(!mediumBlogs && blogSection.displayMediumBlogs !== "true") ||
          mediumBlogs === "Error"
            ? blogSection.blogs.map((blog, i) => {
                return (
                  <BlogCard
                    key={i}
                    blog={{
                      url: blog.url,
                      image: blog.image,
                      title: blog.title,
                      description: blog.description
                    }}
                  />
                );
              })
            : mediumBlogs.map((blog, i) => {
                return (
                  <BlogCard
                    key={i}
                    blog={{
                      url: blog.link,
                      title: blog.title,
                      description: extractTextContentFromHtml(blog.content)
                    }}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
