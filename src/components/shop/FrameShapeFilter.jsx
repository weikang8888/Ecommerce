import React from "react";

const FrameShapeFilter = ({ selectedShapes, onShapeChange }) => {
  const shapes = [
    { id: "round", name: "Round", img: "assets/images/fz-shape-1.png" },
    { id: "rectangle", name: "Rectangle", img: "assets/images/fz-shape-2.png" },
    { id: "wayfarer", name: "Wayfarer", img: "assets/images/fz-shape-3.png" },
    { id: "cat-eye", name: "Cat Eye", img: "assets/images/fz-shape-4.png" },
    { id: "square", name: "Square", img: "assets/images/fz-shape-5.png" },
    { id: "geometric", name: "Geometric", img: "assets/images/fz-shape-6.png" },
    { id: "aviator", name: "Aviator", img: "assets/images/fz-shape-7.png" },
    { id: "hexagonal", name: "Hexagonal", img: "assets/images/fz-shape-8.png" },
    { id: "oval", name: "Oval", img: "assets/images/fz-shape-9.png" }
  ];

  const handleShapeClick = (shapeId) => {
    onShapeChange(shapeId);
  };

  return (
    <div className="sidebar-single-area">
      <h3 className="sidebar-single-area__title">Frame Shape</h3>
      <ul className="frame-shape">
        {shapes.map((shape) => (
          <li 
            className={`shape-item ${selectedShapes.includes(shape.id) ? 'active' : ''}`} 
            key={shape.id}
          >
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleShapeClick(shape.id);
              }}
            >
              <div className="fz-shape-img">
                <img src={shape.img} alt={shape.name} />
              </div>
              <div className="fz-shape-txt">
                <span>{shape.name}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrameShapeFilter;
