import Link from "next/link";

export const LinkButton = ({
  children,
  href = "",
  classNameButton,
  target = "",
}) => {
  return (
    <Link
      href={href}
      className={`bg-neonblue rounded-xl text-xl font-semibold py-2.5 px-8 ${classNameButton}`}
      target={target}
    >
      {children}
    </Link>
  );
};
