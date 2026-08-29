import { Button, Drawer, Separator } from "@heroui/react";
import { DollarSign, Home, Layers, Mail, Zap } from "lucide-react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const SideDrawer = () => {
  const links = (
    <>
      <a
        href="#home"
        className="font-semibold text-neutral-700 text-sm leading-5 border-solid flex items-center gap-2 hover:bg-green-900 rounded-lg px-2 pb-2 pt-1 hover:text-white transition-colors duration-200"
      >
        <Home className="size-4" />
        Home
      </a>
      <a
        href="#features"
        scroll-behavior="smooth"
        className="scroll-smooth font-medium text-neutral-700 text-sm leading-5 flex pb-1 items-center gap-2 hover:bg-green-900 rounded-lg px-2 pb-2 pt-1 hover:text-white transition-colors duration-200"
      >
        <Zap className="size-4" />
        Features
      </a>
      <a
        href="#pricing"
        scroll-behavior="smooth"
        className="scroll-smooth font-medium text-neutral-700 text-sm leading-5 flex pb-1 items-center gap-2 hover:bg-green-900 rounded-lg px-2 pb-2 pt-1 hover:text-white transition-colors duration-200"
      >
        <DollarSign className="size-4" />
        Pricing
      </a>
      <a
        href="#contact"
        scroll-behavior="smooth"
        className="scroll-smooth font-medium text-neutral-700 text-sm leading-5 flex pb-1 items-center gap-2 hover:bg-green-900 rounded-lg px-2 pb-2 pt-1 hover:text-white transition-colors duration-200"
      >
        <Mail className="size-4" />
        Contact
      </a>
    </>
  );
  return (
    <Drawer>
      <Button
        variant="ghost"
        className="max-[846px]:block max-[846px]:size-9 hidden"
      >
        <HiOutlineMenuAlt2 />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.Header>
              <Drawer.Heading className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-neutral-900 text-neutral-50 flex justify-center items-center">
                  <Layers className="size-5" />
                </div>
                <span className="font-bold text-lg leading-7 tracking-tight text-neutral-950">
                  FlowSuite
                </span>
              </Drawer.Heading>
            </Drawer.Header>
            <Separator className="my-4" />
            <Drawer.Body>{links}</Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
};

export default SideDrawer;
