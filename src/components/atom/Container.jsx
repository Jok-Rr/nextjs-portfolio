export const Container = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mx-8 py-12 text-center m-auto">
      {children}
    </div>
  );
};
