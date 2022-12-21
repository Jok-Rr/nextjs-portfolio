export const FakeButton = ({ children, classNameButton, data, onClick }) => {
  return (
    <button
      className={`bg-neonblue rounded-xl text-xl font-semibold py-2.5 px-8 ${classNameButton}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
