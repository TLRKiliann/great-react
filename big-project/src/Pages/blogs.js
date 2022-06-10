import React from 'react';
import "./style.css"

const Blogs = () => {
  return (
    <div id="mainblog--div">
      <div className="blog--div">
        <h1>Blog</h1>
      </div>
      
      <div className="asideblog--div">
        <aside className="aside--blog">
          <nav>
            <ul>
              <li>
                <a className="bloglink--div">
                  title 1
                </a>
              </li>
              <li>
                <a className="bloglink--div">
                  title 2 title 2
                </a>
              </li>
              <li>
                <a className="bloglink--div">
                  title 3 title 3
                </a>
              </li>
              <li>
                <a className="bloglink--div">
                  title 4 title 4
                </a>
              </li>
              <li>
                <a className="bloglink--div">
                  title 3 title 5
                </a>
              </li>
              <li>
                <a className="bloglink--div">
                  title 4 titletitle 6title 6
                </a>
              </li>
              <li>
                <a className="bloglink--div">
                  title 3 titletitle 7
                </a>
              </li>
              <li>
                <a className="bloglink--div">
                  title 4 title 8
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>

      <div id="paragraph--div">
        <h2>
          Title of blog
        </h2>
      </div>
      
      <div className="frameblog--div" >
        <h3>Title frame blog 1</h3>
        <p>Some lines could be write here...</p>
      </div>

      <div className="frameblog--div">
        <h3>Title frame blog 2</h3>
        <p>Some lines could be write here...</p>
      </div>

      <div className="frameblog--div">
        <h3>Title frame blog 3</h3>
        <p>Some lines could be write here...</p>
      </div>

      <div className="frameblog--div">
        <h3>Title frame blog 4</h3>
        <p>Some lines could be write here...</p>
      </div>

      <div className="frameblog--div">
        <h3>Title frame blog 5</h3>
        <p>Some lines could be write here...</p>
      </div>

      <div className="frameblog--div">
        <h3>Title frame blog 6</h3>
        <p>Some lines could be write here...</p>
      </div>

    </div>
  );
};

export default Blogs;