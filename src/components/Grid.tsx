import React from "react";

interface ImageGridProps {
  containerClass?: string;
  rowClass?: string;
  elementClass?: string;
  children: React.ReactNode;
}

const Grid: React.FC<ImageGridProps> = ({ containerClass='container', rowClass='row', elementClass = 'col', children}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={containerClass}>
      <div className={rowClass}>
        {childrenArray.map((gridItem, index) => (
          <div className={elementClass} key={index}>
            {gridItem}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;