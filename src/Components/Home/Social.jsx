import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://twitter.com/Ace_Shubham_"
        className="home__social-icon"
        target='_blank'
        rel="noreferrer"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ershubham007/"
        className="home__social-icon"
        target='_blank'
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/CodeWithShubham007"
        className="home__social-icon"
        target='_blank'
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social
