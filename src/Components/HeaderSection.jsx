import { Button, Chip } from "@heroui/react";
import { ArrowRight, Check, Play, Sparkles } from "lucide-react";

const HeaderSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto p-12">
      <div className="grid grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-6">
          <Chip className="rounded-full  w-fit text-sm px-6 py-2 bg-green-50 text-green-900 border border-green-200">
            <Sparkles className="size-3 mr-1" />
            New: AI-powered workflows
          </Chip>
          <h1 className=" text-neutral-900 font-bold text-5xl leading-12 tracking-tight">
            Run your entire team from
            <span className="text-neutral-900">one workspace</span>
          </h1>
          <p className="text-neutral-500 text-lg leading-7">
            FlowSuite brings projects, docs, and communication together so your
            team ships faster. Automate the busywork and focus on what matters.
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-neutral-900 text-neutral-50 text-base leading-6 px-8 h-12">
              Get Started
              <ArrowRight className="size-4 ml-2" />
            </Button>
            <Button variant="outline" className="text-base leading-6 px-8 h-12">
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
        <div className="relative shadow-sm rounded-3xl border-neutral-200 border-1 border-solid overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZCUyMHNjcmVlbiUyMHNvZnR3YXJlfGVufDF8MHx8fDE3ODc5MzQ3NDF8MA&ixlib=rb-4.1.0&q=80&w=400"
            alt="Product dashboard"
            className="object-cover w-full h-105"
            data-photoid="JKUTrJ4vK00"
            data-authorname="Luke Chesser"
            data-authorurl="https://unsplash.com/@lukechesser"
            data-blurhash="LUDvl^00-;9Z~qM{IUt7_2M_Ios:"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
