import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">NYT React</IndexLink>
      </div>
      <div className="top-bar-left">
        <Link to="/new_articles"> Fetch New Articles</Link>
      </div>
      <div className="top-bar-left">
        <Link to="/fav_articles">Faved Articles</Link>
      </div>
    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
