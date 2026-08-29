import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Chip,
} from "@heroui/react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Check, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useInView } from "./useInView";
const PricingSection = () => {
  const [check, setCheck] = useState("monthly");
  const handleChange = (value) => {
    setCheck(value);
  };
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [yref, isyInView] = useInView({ threshold: 0.2 });
  return (
    <div id="pricing" className={`w-11/12 mx-auto`}>
      <div className="text-center flex flex-col items-center gap-4">
        <Chip className="bg-neutral-200 text-neutral-900">Pricing</Chip>
        <h2 className="font-bold text-4xl leading-10 tracking-tight">
          Simple, transparent pricing
        </h2>
        <p className="max-w-xl text-neutral-500">
          Choose the plan that scales with your team. No hidden fees, cancel
          anytime.
        </p>
        <ToggleButtonGroup
          color="primary"
          exclusive={true}
          value={check}
          onClick={(e) => handleChange(e.target.value)}
          aria-label="Platform"
          className="flex items-center gap-2"
        >
          <ToggleButton value="monthly" className="rounded-lg">
            Monthly
          </ToggleButton>
          <ToggleButton value="yearly" className="rounded-lg">
            Yearly
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div
        className={` grid-cols-3 max-sm:grid-cols-1 mt-8 gap-6 ${check === "yearly" ? "hidden" : "grid"}`}
      >
        <Card
          ref={ref}
          style={{ opacity: isInView ? 1 : 0 }}
          className={` ${isInView ? "animate__animated animate__fadeInLeft" : ""} p-6 gap-6`}
        >
          <CardHeader className="p-0 gap-2">
            <CardTitle className="text-lg leading-7">Basic</CardTitle>
            <Card.Description>
              For individuals getting started.
            </Card.Description>
            <div className="flex pt-2 items-end gap-1">
              <span className="font-bold text-4xl leading-10">
                $12
                <span className="text-sm font-semibold text-gray-600">
                  /month
                </span>
              </span>

              <span className="text-neutral-500 text-sm leading-5 pb-1" />
            </div>
          </CardHeader>
          <CardContent className="p-0 gap-2">
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>5 projects</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>10 GB storage</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Community support</span>
            </div>
            <div className="text-neutral-500 text-sm leading-5 flex items-center gap-2">
              <X className="size-4" />
              <span>Advanced analytics</span>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            {/* <Button /> */}
            <Button variant="outline">
              <ShoppingBag />
              Purchase
            </Button>
          </CardFooter>
        </Card>
        <Card
          ref={ref}
          style={{ opacity: isInView ? 1 : 0 }}
          className={` ${isInView ? "animate__animated animate__fadeInUp" : ""} relative shadow-lg border-neutral-900  border-0 border-solid p-6 gap-6 `}
        >
          <div className="left-1/2 -translate-x-1/2 absolute -top-3">
            <Chip className="bg-neutral-900 text-neutral-50">Most Popular</Chip>
          </div>
          <CardHeader className="p-0 gap-2">
            <CardTitle className="text-lg leading-7">Standard</CardTitle>
            <Card.Description>
              For growing teams that need more.
            </Card.Description>
            <div className="flex pt-2 items-end gap-1">
              <span className="font-bold text-neutral-900 text-4xl leading-10">
                $29
                <span className="text-sm font-semibold text-gray-600">
                  /month
                </span>
              </span>

              <span className="text-neutral-500 text-sm leading-5 pb-1" />
            </div>
          </CardHeader>
          <CardContent className="p-0 gap-2">
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Unlimited projects</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>100 GB storage</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Priority support</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Advanced analytics</span>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            {/* <Button /> */}
            <Button variant="primary">
              <ShoppingBag />
              Purchase
            </Button>
          </CardFooter>
        </Card>
        <Card
          ref={ref}
          style={{ opacity: isInView ? 1 : 0 }}
          className={` ${isInView ? "animate__animated animate__fadeInRight" : ""} p-6 gap-6`}
        >
          <CardHeader className="p-0 gap-2">
            <CardTitle className="text-lg leading-7">Premium</CardTitle>
            <Card.Description>For organizations at scale.</Card.Description>
            <div className="flex pt-2 items-end gap-1">
              <span className="font-bold text-4xl leading-10">
                $59
                <span className="text-sm font-semibold text-gray-600">
                  /month
                </span>
              </span>

              <span className="text-neutral-500 text-sm leading-5 pb-1" />
            </div>
          </CardHeader>
          <CardContent className="p-0 gap-2">
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Everything in Standard</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Unlimited storage</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Dedicated manager</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>{`SLA & SSO`}</span>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            {/* <Button /> */}
            <Button variant="outline">
              <ShoppingBag />
              Purchase
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div
        className={` grid-cols-3 mt-8 gap-6 ${check === "yearly" ? "grid" : "hidden"}`}
      >
        <Card
          ref={yref}
          style={{ opacity: isyInView ? 1 : 0 }}
          className={`p-6 gap-6 ${isyInView ? "animate__animated animate__fadeInLeft" : ""}`}
        >
          <CardHeader className="p-0 gap-2">
            <CardTitle className="text-lg leading-7">Basic</CardTitle>
            <Card.Description>
              For individuals getting started.
            </Card.Description>
            <div className="flex pt-2 items-end gap-1">
              <span className="font-bold text-4xl leading-10 ">
                $120
                <span className="text-sm font-semibold text-gray-600">
                  /year
                </span>
              </span>
              <span className="text-neutral-500 text-sm leading-5 pb-1" />
            </div>
          </CardHeader>
          <CardContent className="p-0 gap-2">
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>5 projects</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>10 GB storage</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Community support</span>
            </div>
            <div className="text-neutral-500 text-sm leading-5 flex items-center gap-2">
              <X className="size-4" />
              <span>Advanced analytics</span>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            {/* <Button /> */}
            <Button variant="outline">
              <ShoppingBag />
              Purchase
            </Button>
          </CardFooter>
        </Card>
        <Card
          ref={yref}
          style={{ opacity: isyInView ? 1 : 0 }}
          className={`relative shadow-lg border-neutral-900  border-0 border-solid p-6 gap-6 ${isyInView ? "animate__animated animate__fadeInUp" : ""}`}
        >
          <div className="left-1/2 -translate-x-1/2 absolute -top-3">
            <Chip className="bg-neutral-900 text-neutral-50">Most Popular</Chip>
          </div>
          <CardHeader className="p-0 gap-2">
            <CardTitle className="text-lg leading-7">Standard</CardTitle>
            <Card.Description>
              For growing teams that need more.
            </Card.Description>
            <div className="flex pt-2 items-end gap-1">
              <span className="font-bold text-neutral-900 text-4xl leading-10 ">
                $290
                <span className="text-sm font-semibold text-gray-600">
                  /year
                </span>
              </span>
              <span className="text-neutral-500 text-sm leading-5 pb-1" />
            </div>
          </CardHeader>
          <CardContent className="p-0 gap-2">
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Unlimited projects</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>100 GB storage</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Priority support</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Advanced analytics</span>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            {/* <Button /> */}
            <Button variant="primary">
              <ShoppingBag />
              Purchase
            </Button>
          </CardFooter>
        </Card>
        <Card
          ref={yref}
          style={{ opacity: isyInView ? 1 : 0 }}
          className={`p-6 gap-6 ${isyInView ? "animate__animated animate__fadeInRight" : ""}`}
        >
          <CardHeader className="p-0 gap-2">
            <CardTitle className="text-lg leading-7">Premium</CardTitle>
            <Card.Description>For organizations at scale.</Card.Description>
            <div className="flex pt-2 items-end gap-1">
              <span className="font-bold text-4xl leading-10 ">
                $590
                <span className="text-sm font-semibold text-gray-600">
                  /year
                </span>
              </span>
              <span className="text-neutral-500 text-sm leading-5 pb-1" />
            </div>
          </CardHeader>
          <CardContent className="p-0 gap-2">
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Everything in Standard</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Unlimited storage</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>Dedicated manager</span>
            </div>
            <div className="text-sm leading-5 flex items-center gap-2">
              <Check className="size-4 text-neutral-900" />
              <span>{`SLA & SSO`}</span>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            {/* <Button /> */}
            <Button variant="outline">
              <ShoppingBag />
              Purchase
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PricingSection;
