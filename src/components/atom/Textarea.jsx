export const Textarea = ({ placeholder }) => {
  return (
    <textarea
      style={{ resize: "none" }}
      className="bg-lightdark rounded-xl h-36 w-full p-4 focus:border-4 border-neonblue outline-none mb-3"
      placeholder={placeholder}
    />
  );
};
