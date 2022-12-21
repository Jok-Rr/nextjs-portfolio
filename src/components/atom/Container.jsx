export const Container = ({ children, id, className }) => {
  return (
    <div
      className={`grid grid-cols-4 gap-4 mx-8 py-12 text-center m-auto ${className} lg:grid-cols-12 lg:mx-20`}
      id={id}
    >
      {children}
    </div>
  );
};
