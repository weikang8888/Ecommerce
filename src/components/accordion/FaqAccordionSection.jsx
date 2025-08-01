import React, { useState } from "react";
import { accordionList } from "../../data/Data";

const FaqAccordionSection = () => {
  const [openAccordionId, setOpenAccordionId] = useState(0);

  const handleAccordionBtn = (itemId) => {
    setOpenAccordionId((prevState) => (prevState === itemId ? null : itemId));
  };

  return (
    <div className="faq-accordion-area">
      <div className="container">
        <div className="d-flex flex-column gap-2">
          {accordionList.map((item) => (
            <div
              className={`col-md-12 fz-single-accordion-item ${
                openAccordionId === item.id ? "open" : ""
              }`}
              key={item.id}
            >
              <div
                className="fz-single-accordion-item__header"
                role="button"
                onClick={() => handleAccordionBtn(item.id)}
              >
                <h3 className="fz-single-accordion-item__title">
                  {item.title}
                </h3>
                <i className="fa-regular fa-plus"></i>
              </div>
              {openAccordionId === item.id && (
                <p className="fz-single-accordion-item__body">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordionSection;
