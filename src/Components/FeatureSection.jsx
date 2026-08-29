import { Card, CardContent, CardHeader, CardTitle, Chip } from "@heroui/react";
import { Gauge, Headset, Puzzle, ShieldCheck } from "lucide-react";

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="w-11/12 mx-auto mt-20 animate__animated animate__fadeInUp"
    >
      <div className="text-center flex pb-8 flex-col items-center gap-2">
        <Chip className="font-semibold uppercase text-green-900 text-sm leading-5 tracking-wide bg-green-100">
          Features
        </Chip>
        <h2 className="font-bold text-neutral-900 text-3xl leading-9 tracking-tight">
          Everything you need to move faster
        </h2>
        <p className="max-w-2xl text-neutral-500">
          Powerful tools built to help your team stay aligned, secure, and
          productive.
        </p>
      </div>
      <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="p-6 gap-4">
          <CardHeader className="p-0 gap-2">
            <div className="size-12 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
              <Gauge className="size-6" />
            </div>
            <CardTitle className="text-lg leading-7">
              Blazing Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 gap-2">
            <p className="text-neutral-500 text-sm leading-5">
              Lightning-fast load times keep your team in flow, no matter the
              project size.
            </p>
          </CardContent>
        </Card>
        <Card className="p-6 gap-4">
          <CardHeader className="p-0 gap-2">
            <div className="size-12 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
              <Headset className="size-6" />
            </div>
            <CardTitle className="text-lg leading-7">24/7 Support</CardTitle>
          </CardHeader>
          <CardContent className="p-0 gap-2">
            <p className="text-neutral-500 text-sm leading-5">
              Real humans ready to help around the clock, whenever you need us.
            </p>
          </CardContent>
        </Card>
        <Card className="p-6 gap-4">
          <CardHeader className="p-0 gap-2">
            <div className="size-12 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
              <ShieldCheck className="size-6" />
            </div>
            <CardTitle className="text-lg leading-7">Secure Payments</CardTitle>
          </CardHeader>
          <CardContent className="p-0 gap-2">
            <p className="text-neutral-500 text-sm leading-5">
              Bank-grade encryption and compliance keep your data and billing
              safe.
            </p>
          </CardContent>
        </Card>
        <Card className="p-6 gap-4">
          <CardHeader className="p-0 gap-2">
            <div className="size-12 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
              <Puzzle className="size-6" />
            </div>
            <CardTitle className="text-lg leading-7">
              Easy Integration
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 gap-2">
            <p className="text-neutral-500 text-sm leading-5">
              Connect your favorite tools in minutes with 100+ native
              integrations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeatureSection;
