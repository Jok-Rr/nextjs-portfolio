export const Container = ({ children, id, className }) => {
  return (
    <div
      className={`m-auto mx-8 grid grid-cols-4 gap-5 py-12 text-center ${className} lg:mx-20 lg:grid-cols-12 xl:mx-48 xl:py-28 2xl:m-auto 2xl:w-1/2`}
      id={id}
    >
      {children}
    </div>
  );
};
