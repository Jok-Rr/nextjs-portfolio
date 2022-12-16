import Link from "next/link";

export const LinkButton = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="bg-neonblue rounded-xl text-xl font-bold py-2.5 px-8"
    >
      {children}
    </Link>
  );
};
