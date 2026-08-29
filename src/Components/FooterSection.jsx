import { Boxes } from "lucide-react";

const FooterSection = () => {
  return (
    <div>
      <footer className="bg-neutral-100/40 border-neutral-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid w-full">
        <div className="max-w-[1440px] mx-auto p-12">
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-neutral-900 text-neutral-50 flex justify-center items-center">
                  <Boxes className="size-5" />
                </div>
                <span className="font-semibold text-lg leading-7 tracking-tight">
                  NimbusFlow
                </span>
              </div>
              <p className="text-neutral-500 text-sm leading-5">
                Build, ship and scale your products faster with a platform teams
                love.
              </p>
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-full bg-white text-neutral-500 flex justify-center items-center">
                  {/* <FallbackComponent className="size-4" /> */}
                </div>
                <div className="size-9 rounded-full bg-white text-neutral-500 flex justify-center items-center">
                  {/* <FallbackComponent className="size-4" /> */}
                </div>
                <div className="size-9 rounded-full bg-white text-neutral-500 flex justify-center items-center">
                  {/* <FallbackComponent className="size-4" /> */}
                </div>
                <div className="size-9 rounded-full bg-white text-neutral-500 flex justify-center items-center">
                  {/* <FallbackComponent className="size-4" /> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-sm leading-5">Product</span>
              <a className="text-neutral-500 text-sm leading-5">Features</a>
              <a className="text-neutral-500 text-sm leading-5">Pricing</a>
              <a className="text-neutral-500 text-sm leading-5">Integrations</a>
              <a className="text-neutral-500 text-sm leading-5">Changelog</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-sm leading-5">Company</span>
              <a className="text-neutral-500 text-sm leading-5">About</a>
              <a className="text-neutral-500 text-sm leading-5">Careers</a>
              <a className="text-neutral-500 text-sm leading-5">Blog</a>
              <a className="text-neutral-500 text-sm leading-5">Contact</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-sm leading-5">Legal</span>
              <a className="text-neutral-500 text-sm leading-5">Privacy</a>
              <a className="text-neutral-500 text-sm leading-5">Terms</a>
              <a className="text-neutral-500 text-sm leading-5">Security</a>
            </div>
          </div>
          <div className="border-neutral-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex mt-8 pt-6 justify-between items-center">
            <span className="text-neutral-500 text-sm leading-5">
              © 2024 NimbusFlow, Inc. All rights reserved.
            </span>
            <span className="text-neutral-500 text-sm leading-5">
              Made with care in San Francisco
            </span>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
};

export default FooterSection;
