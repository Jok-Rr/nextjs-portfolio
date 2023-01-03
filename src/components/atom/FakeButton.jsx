export const FakeButton = ({ children, classNameButton, onClick }) => {
  return (
    <button
      className={`rounded-xl bg-neonblue py-2.5 px-8 text-xl font-semibold transition-transform duration-300 ease-in-out hover:scale-105 ${classNameButton}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
