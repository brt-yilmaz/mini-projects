import React, { useState, createContext, useContext } from "react";

const CardContext = createContext();

const Card = ({ children, limit = 3 }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !isCollapsed);
  };

  const value = { isCollapsed, toggleCollapse, limit };

  return (
    <CardContext.Provider value={value}>
      <div className="card">{children}</div>
    </CardContext.Provider>
  );
};

const CardContent = ({ children }) => {
  const { isCollapsed, limit } = useContext(CardContext);
  return children
    .slice(0, isCollapsed ? limit : children.length)
    .map((child, index) => <div key={index}>{child}</div>);
};

const Expand = ({ children }) => {
  const { toggleCollapse, isCollapsed } = useContext(CardContext);

  return (
    isCollapsed && React.cloneElement(children, { onClick: toggleCollapse })
  );
};

const Collapse = ({ children }) => {
  const { toggleCollapse, isCollapsed } = useContext(CardContext);

  return (
    !isCollapsed && React.cloneElement(children, { onClick: toggleCollapse })
  );
};

Card.CardContent = CardContent;
Card.Expand = Expand;
Card.Collapse = Collapse;

export default Card;
