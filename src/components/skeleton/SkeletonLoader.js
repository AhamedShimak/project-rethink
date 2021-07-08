import React from 'react';
import ContentLoader from "react-content-loader";
import './SkeletonLoader.css'


function Skeletonloader(props) {
    return (
<div className="loader__content__box">
<ContentLoader 
    speed={1}
    width={142}
    height={160}
    viewBox="0 0 130 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="5" rx="3" ry="3" width="140" height="7" /> 
    <rect x="0" y="34" rx="3" ry="3" width="140" height="100" /> 
    <rect x="0" y="19" rx="3" ry="3" width="140" height="7" /> 
    <rect x="0" y="141" rx="3" ry="3" width="49" height="18" /> 
    <rect x="57" y="141" rx="3" ry="3" width="49" height="18" /> 
    <rect x="112" y="141" rx="3" ry="3" width="18" height="18" />
  </ContentLoader>
</div>
      
    
    )
}
Skeletonloader.metadata = {
    name: 'PhátMai', // My name
    name: 'PhátMai', // My name
    github: 'lPaths', // Github username
    description: 'Card', // Little tagline
    filename: 'Card', // filename of your loader
    filename: 'Card', // filename of your loader

  }
export default Skeletonloader;
