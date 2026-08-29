import { Button, Chip } from "@heroui/react";
import { ArrowRight, Check, Play, Sparkles } from "lucide-react";

const HeaderSection = () => {
  return (
    <section className="max-w-11/12 mx-auto py-12 ">
      <div className="grid max-sm:grid-cols-1 grid-cols-2  items-center gap-12">
        <div className="flex flex-col gap-6 animate__animated animate__fadeInLeft">
          <Chip className="rounded-full  w-fit text-sm px-6 py-2 bg-green-50 text-green-900 border border-green-200">
            <Sparkles className="size-3 mr-1" />
            New: AI-powered workflows
          </Chip>
          <h1 className=" text-neutral-900 font-bold text-5xl leading-12 tracking-tight">
            Run your entire team from
            <span className="text-neutral-900"> one workspace</span>
          </h1>
          <p className="text-neutral-500 text-lg leading-7">
            FlowSuite brings projects, docs, and communication together so your
            team ships faster. Automate the busywork and focus on what matters.
          </p>
          <div className="flex max-sm:flex-col  items-center gap-4">
            <Button className="bg-neutral-900 text-neutral-50 text-base leading-6 px-8 h-12 max-sm:w-full">
              Get Started
              <ArrowRight className="size-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="text-base leading-6 px-8 h-12 max-sm:w-full"
            >
              <Play className="size-4 mr-2" />
              Watch demo
            </Button>
          </div>
          <div className="flex pt-2 items-center gap-6">
            <div className="text-neutral-500 text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              No credit card required
            </div>
            <div className="text-neutral-500 text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              14-day free trial
            </div>
          </div>
        </div>
        <div className="relative shadow-sm rounded-3xl border-neutral-200 border-1 border-solid overflow-hidden animate__animated animate__fadeIn delay-1.5s">
          <img
            loading="lazy"
            decoding="async"
            src="https://miro.medium.com/v2/resize:fit:1358/1*R1Lp_7Axmf6ARksW_bfTGg.png"
            alt="Product dashboard"
            className="object-cover w-full h-auto min-h-70"
            data-photoid="JKUTrJ4vK00"
            data-authorname="Miro"
            data-authorurl="https://miro.medium.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
