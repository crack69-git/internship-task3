import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  TextArea,
} from "@heroui/react";
import { Mail, MapPin, Phone } from "lucide-react";

const InquirySection = () => {
  return (
    <div id="contact" className="bg-neutral-100  my-20">
      <section className="w-11/12 mx-auto py-20">
        <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl leading-9 tracking-tight">
              Have questions?
            </h2>
            <p className="text-neutral-500">
              Fill out the form and our team will get back to you within 24
              hours. Tell us about your requirements and how we can help.
            </p>
            <div className="flex mt-2 flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-neutral-100 text-neutral-900 flex justify-center items-center">
                  <Mail className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-sm leading-5">
                    Email us
                  </span>
                  <span className="text-neutral-500 text-sm leading-5">
                    hello@nimbusflow.com
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-neutral-100 text-neutral-900 flex justify-center items-center">
                  <Phone className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-sm leading-5">Call us</span>
                  <span className="text-neutral-500 text-sm leading-5">
                    +1 (555) 012-3456
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-neutral-100 text-neutral-900 flex justify-center items-center">
                  <MapPin className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-sm leading-5">
                    Visit us
                  </span>
                  <span className="text-neutral-500 text-sm leading-5">
                    123 Market Street, San Francisco
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Card className="p-8 gap-6">
            <CardHeader className="p-0 gap-1">
              <CardTitle className="text-xl leading-7">Inquiry Form</CardTitle>
              <Card.Description>We'd love to hear from you.</Card.Description>
            </CardHeader>
            <CardContent className="p-0 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Jane Doe" defaultValue="" />
                <span className="text-[#e7000b] text-xs leading-4">
                  Name is required
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  defaultValue=""
                />
                <span className="text-[#e7000b] text-xs leading-4">
                  Enter a valid email address
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="border-neutral-200 border-0 border-solid"
                  defaultValue=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message / Requirements</Label>
                <TextArea
                  id="message"
                  placeholder="Tell us what you need..."
                  className="min-h-24 border-neutral-200 border-0 border-solid"
                  defaultValue=""
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="agree" defaultChecked={false} />
                <Label
                  htmlFor="agree"
                  className="text-neutral-500 text-sm leading-5"
                >
                  I agree to the terms and privacy policy
                </Label>
              </div>
            </CardContent>
            <CardFooter className="p-0">
              <Button className="bg-neutral-900 text-neutral-50 w-full">
                Submit Inquiry
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      ;
    </div>
  );
};

export default InquirySection;
