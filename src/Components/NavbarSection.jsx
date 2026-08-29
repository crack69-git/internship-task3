import { Button } from "@heroui/react";
import { DollarSign, Home, Layers, Mail, Zap } from "lucide-react";

const NavbarSection = () => {
  return (
    <header className="border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid w-full animate__animated animate__fadeInDown">
      <div className="max-w-[1440px] flex mx-auto px-12 py-4 justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-neutral-900 text-neutral-50 flex justify-center items-center">
            <Layers className="size-5" />
          </div>
          <span className="font-bold text-lg leading-7 tracking-tight text-neutral-950">
            FlowSuite
          </span>
        </div>
        <nav className="flex items-center gap-8">
          <a className="font-semibold text-neutral-950 text-sm leading-5 border-neutral-900 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2">
            <Home className="size-4" />
            Home
          </a>
          <a className="font-medium text-neutral-500 text-sm leading-5 flex pb-1 items-center gap-2">
            <Zap className="size-4" />
            Features
          </a>
          <a className="font-medium text-neutral-500 text-sm leading-5 flex pb-1 items-center gap-2">
            <DollarSign className="size-4" />
            Pricing
          </a>
          <a className="font-medium text-neutral-500 text-sm leading-5 flex pb-1 items-center gap-2">
            <Mail className="size-4" />
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="secondary">Sign in</Button>
          <Button>Try Free</Button>
        </div>
      </div>
    </header>
  );
};

export default NavbarSection;
