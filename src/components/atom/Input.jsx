export const Input = ({ type, placeholder }) => {
  return (
    <>
      <label className="hidden">{placeholder}</label>
      <input
        type={type}
        className="bg-lightdark rounded-xl h-12 w-full px-4 focus:border-4 border-neonblue outline-none mb-3"
        placeholder={placeholder}
      />
    </>
  );
};
