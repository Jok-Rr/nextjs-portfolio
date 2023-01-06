import Link from "next/link";

export const MobileMenu = ({ scrollDirection }) => {
  return (
    <div
      className={`fixed bottom-7 left-0 right-0 top-auto z-50 mx-auto w-10/12 rounded-full border-2 border-neonblue bg-noblack py-4 px-7 transition delay-200 ease-in lg:hidden ${
        scrollDirection === "DOWN" ? "translate-y-28" : "translate-y-0"
      } `}
    >
      <ul className="flex justify-between ">
        <li className="text-xl">
          <Link href={"/#"}>
            <i className="fa-solid fa-house-blank"></i>
          </Link>
        </li>
        <li className="text-xl active:text-neonblue">
          <Link href={"/#about"}>
            <i className="fa-solid fa-user"></i>
          </Link>
        </li>
        <li className="active text-xl">
          <Link href={"/#roadmap"}>
            <i className="fa-solid fa-road"></i>
          </Link>
        </li>
        <li className="active text-xl">
          <Link href={"/#projects"}>
            <i className="fa-solid fa-suitcase"></i>
          </Link>
        </li>
        <li className="active text-xl">
          <Link href={"/#testimonials"}>
            <i className="fa-solid fa-star-sharp"></i>
          </Link>
        </li>
        <li className="text-xl">
          <Link href={"/#contact"}>
            <i className="fa-solid fa-comment"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
