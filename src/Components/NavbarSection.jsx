import { Button } from "@heroui/react";
import { DollarSign, Home, Layers, Mail, Zap } from "lucide-react";
import SideDrawer from "./SideDrawer";

const NavbarSection = () => {
  const links = (
    <>
      <a
        href="#home"
        className="font-semibold text-neutral-700 text-sm leading-5 border-solid flex items-center gap-2 hover:bg-green-900 rounded-lg px-2 py-2 hover:text-white transition-colors duration-200"
      >
        <Home className="size-4" />
        Home
      </a>
      <a
        href="#features"
        scroll-behavior="smooth"
        className="scroll-smooth font-medium text-neutral-700 text-sm leading-5 flex items-center gap-2 hover:bg-green-900 rounded-lg px-2 py-2 hover:text-white transition-colors duration-200"
      >
        <Zap className="size-4" />
        Features
      </a>
      <a
        href="#pricing"
        scroll-behavior="smooth"
        className="scroll-smooth font-medium text-neutral-700 text-sm leading-5 flex  items-center gap-2 hover:bg-green-900 rounded-lg px-2 py-2 hover:text-white transition-colors duration-200"
      >
        <DollarSign className="size-4" />
        Pricing
      </a>
      <a
        href="#contact"
        scroll-behavior="smooth"
        className="scroll-smooth font-medium text-neutral-700 text-sm leading-5 flex  items-center gap-2 hover:bg-green-900 rounded-lg px-2 py-2 hover:text-white transition-colors duration-200"
      >
        <Mail className="size-4" />
        Contact
      </a>
    </>
  );
  return (
    <header
      id="home"
      className="border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid w-full animate__animated animate__fadeInDown"
    >
      <div className="max-w-11/12 flex mx-auto py-4 justify-between items-center">
        <div className="flex items-center gap-2">
          <SideDrawer />
          <div className="size-8 rounded-lg bg-neutral-900 text-neutral-50 flex justify-center items-center">
            <Layers className="size-5" />
          </div>
          <span className="font-bold text-lg leading-7 tracking-tight text-neutral-950">
            FlowSuite
          </span>
        </div>
        <nav className="flex items-center gap-8 max-[846px]:hidden">
          {links}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="secondary">Sign in</Button>
          <Button className="hover:bg-blue-700">Try Free</Button>
        </div>
      </div>
    </header>
  );
};

export default NavbarSection;
