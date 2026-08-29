import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

const GetStarted = () => {
  return (
    <div>
      <section className="max-w-[1440px] mt-20 mx-auto px-12 pb-12">
        <div className="text-center rounded-3xl bg-neutral-900 text-neutral-50 flex p-12 flex-col items-center gap-6">
          <h2 className="font-bold text-4xl leading-10 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="max-w-xl text-neutral-50/80">
            Join thousands of teams already building faster with NimbusFlow.
            Start your free 14-day trial today.
          </p>
          <Button className="font-semibold bg-white text-neutral-950 text-base leading-6 px-8 h-12">
            Start Free Trial
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
