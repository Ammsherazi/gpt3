import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {blog01, blog02, blog03, blog04, blog05} from './imports';
import { motion as m } from "framer-motion";
import { textVariant } from "../../utils/motion";


const Blog = () => {
  return (
    <div className="section__padding gpt3__blog" id="blog">
      <div className="gpt3__blog-heading">
        <m.h1 
        variants={textVariant(.5)}
      initial="hidden"
      whileInView="show"
      className="gradient__text">
          A lot is happening, We are blogging about it.
        </m.h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        <Article imgUrl={blog03} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        <Article imgUrl={blog04} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        <Article imgUrl={blog05} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
      </div>
    </div>
  );
};

export default Blog;
