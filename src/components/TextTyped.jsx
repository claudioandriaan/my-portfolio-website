import React from 'react';
import Typed from 'react-typed';

function TypedText() {
  return (
    <div className="typed">
        <Typed
          strings={['Web Crawling Developer at AutoBiz', 'Web Scraping Developer at AutoBiz']}
          typeSpeed={60}
        />
    </div>
    
  );
}

export default TypedText;
