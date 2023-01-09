export const Container = ({ children, id, className }) => {
  return (
    <div
      className={`m-auto grid grid-cols-4 gap-5 px-8 py-12 text-center ${className} overflow-hidden lg:grid-cols-12 lg:px-20 xl:px-48 xl:py-28`}
      id={id}
    >
      {children}
    </div>
  );
};
