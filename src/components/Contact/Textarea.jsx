export const Textarea = ({ placeholder }) => {
  return (
    <textarea
      style={{ resize: "none" }}
      className="mb-3 h-36 w-full rounded-xl border-neonblue bg-lightdark p-4 outline-none focus:border-4"
      placeholder={placeholder}
    />
  );
};
