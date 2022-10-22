import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-container">
        <img src={blog01} alt="blog01" />
        <div className="gpt3__blog-container-text">
          <div>
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
          </div>
          <p>Read Full Article</p>
        </div>
      </div>
      <div className="gpt3__blog-container">
        <img src={blog02} alt="blog02" />
        <div className="gpt3__blog-container-text">
          <div>
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
          </div>
          <p>Read Full Article</p>
        </div>
      </div>
      <div className="gpt3__blog-container">
        <img src={blog03} alt="blog03" />
        <div className="gpt3__blog-container-text">
          <div>
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
          </div>
          <p>Read Full Article</p>
        </div>
      </div>
      <div className="gpt3__blog-container">
        <img src={blog04} alt="blog04" />
        <div className="gpt3__blog-container-text">
          <div>
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
          </div>
          <p>Read Full Article</p>
        </div>
      </div>
      <div className="gpt3__blog-container">
        <img src={blog05} alt="blog05" />
        <div className="gpt3__blog-container-text">
          <div>
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
          </div>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
