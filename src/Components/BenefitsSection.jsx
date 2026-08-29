import { Button } from "@heroui/react";
import { ArrowRight, Check } from "lucide-react";
import { useInView } from "./useInView";
import "animate.css";

const BenefitsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{ opacity: isInView ? 1 : 0 }}
      className={isInView ? "animate__animated animate__fadeInUp" : ""}
    >
      <section className="w-11/12 mx-auto my-20">
        <div className="grid max-sm:grid-cols-1 grid-cols-2 items-center gap-12">
          <div className="relative shadow-sm rounded-3xl border-neutral-200 border-1 border-solid overflow-hidden">
            <img
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
              src="/teams.webp"
              alt="Team collaborating"
              className="object-cover w-full h-110"
            />
          </div>
          <div className="flex flex-col gap-6">
            <span className="font-semibold uppercase text-neutral-900 text-sm leading-5 tracking-wide">
              Benefits
            </span>
            <h2 className="font-bold text-3xl text-neutral-900 leading-9 tracking-tight">
              Why teams choose FlowSuite
            </h2>
            <p className="text-neutral-500">
              Cut context-switching, reduce tool sprawl, and give your team a
              single source of truth that scales with you.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="size-6 shrink-0 rounded-full bg-neutral-200 text-neutral-50 flex mt-0.5 justify-center items-center">
                  <Check className="size-4" color="green" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-neutral-900">
                    Save up to 12 hours per week
                  </p>
                  <p className="text-neutral-500 text-sm leading-5">
                    Automate repetitive tasks and let your team focus on
                    high-impact work.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-6 shrink-0 rounded-full bg-neutral-200 text-neutral-50 flex mt-0.5 justify-center items-center">
                  <Check className="size-4" color="green" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-neutral-900">
                    One workspace, zero silos
                  </p>
                  <p className="text-neutral-500 text-sm leading-5">
                    Keep everyone aligned with shared docs, tasks, and real-time
                    updates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-6 shrink-0 rounded-full bg-neutral-200 text-neutral-50 flex mt-0.5 justify-center items-center">
                  <Check className="size-4" color="green" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-neutral-900">
                    Scales with your business
                  </p>
                  <p className="text-neutral-500 text-sm leading-5">
                    From startups to enterprises, FlowSuite grows without
                    slowing down.
                  </p>
                </div>
              </div>
            </div>
            <Button className="bg-green-800 hover:bg-green-950 text-neutral-50 px-8 max-sm:w-full w-fit h-11">
              Start free trial
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
