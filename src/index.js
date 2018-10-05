import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Index = () => {
  return (
  <div className="container">
    <div className="header">
    </div>
    <div className="content">
      <button className="c-btn c-btn--primary u-margin-right">
        Login
      </button>
    </div>
    <div className="footer">
    </div>
  </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));