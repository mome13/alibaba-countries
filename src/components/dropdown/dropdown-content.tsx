const Content = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <div className={`dropdown-content`}>{children}</div>;
};

export default Content
