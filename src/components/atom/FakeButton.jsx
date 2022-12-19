export const FakeButton = ({ children, classNameButton }) => {
  return (
    <button
      className={`bg-neonblue rounded-xl text-xl font-semibold py-2.5 px-8 ${classNameButton}`}
    >
      {children}
    </button>
  );
};
