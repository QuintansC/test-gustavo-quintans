import useColorMode from "@/hooks/useColorMode";
import Image from "next/image";
import { SwitcherLight, SwitcherDark } from "../utils";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  const style = {
    default: `absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear`,
  };

  return (
    <li>
      <label
        className={`relative m-0 block h-7.5 w-14 rounded-full ${
          colorMode === "dark" ? "bg-darkblue" : "bg-stroke"
        }`}
      >
        <input
          placeholder="t"
          type="checkbox"
          onChange={() => {
            if (typeof setColorMode === "function") {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }
          }}
          className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`${style.default}  ${
            colorMode === "dark" && "right-[3px] translate-x-full"
          }`}
        >
          <span className="dark:hidden">
            <Image src={SwitcherLight} alt=""/>
          </span>
          <span className="hidden dark:inline-block">
            <Image src={SwitcherDark} alt=""/>
            
          </span>
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;
