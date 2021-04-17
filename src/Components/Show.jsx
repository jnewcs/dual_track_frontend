const Show = ({ condition = true, children }) => {
  if (!condition) return null;

  return children;
}

export default Show;
