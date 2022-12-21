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
      className={`rounded-xl bg-neonblue py-2.5 px-8 text-xl font-semibold ${classNameButton}`}
      target={target}
    >
      {children}
    </Link>
  );
};
