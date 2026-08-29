import {
  Button,
  Card,
  CardContent,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { Mail, MapPin, Phone } from "lucide-react";

const InquirySection = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
  };
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
            <CardContent className="p-0 gap-4">
              <Form className="w-full " onSubmit={onSubmit}>
                <Fieldset>
                  <Fieldset.Legend className="text-xl leading-7">
                    Inquiry Form
                  </Fieldset.Legend>
                  <Description>We'd love to hear from you.</Description>
                  <FieldGroup>
                    <TextField
                      isRequired
                      name="name"
                      validate={(value) => {
                        if (value.length < 3) {
                          return "Name must be at least 3 characters";
                        }
                        return null;
                      }}
                    >
                      <Label>Name</Label>
                      <Input placeholder="John Doe" />
                      <FieldError />
                    </TextField>
                    <TextField
                      isRequired
                      name="email"
                      type="email"
                      validate={(value) => {
                        if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            value,
                          )
                        ) {
                          return "Please enter a valid email address";
                        }
                        return null;
                      }}
                    >
                      <Label>Email</Label>
                      <Input placeholder="john@example.com" />
                      <FieldError />
                    </TextField>
                    <TextField
                      isRequired
                      name="phoneNumber"
                      type="tel"
                      validate={(value) => {
                        const phoneRegex = /^(\+880\s?\d{10}|0\d{10})$/;
                        if (!phoneRegex.test(value)) {
                          return "Please enter a valid phone number";
                        }
                        return null;
                      }}
                    >
                      <Label>Phone Number</Label>
                      <Input placeholder="+1 (555) 012-3456" />
                      <FieldError />
                    </TextField>
                    <TextField
                      isRequired
                      name="bio"
                      validate={(value) => {
                        if (value.length < 10) {
                          return "Bio must be at least 10 characters";
                        }
                        return null;
                      }}
                    >
                      <Label>Bio</Label>
                      <TextArea placeholder="Tell us about yourself..." />
                      <Description>Minimum 10 characters</Description>
                      <FieldError />
                    </TextField>
                  </FieldGroup>
                  <Fieldset.Actions>
                    <Button type="submit" className="bg-green-800">
                      Submit Inquiry
                    </Button>
                    <Button type="reset" variant="danger">
                      Reset Form
                    </Button>
                  </Fieldset.Actions>
                </Fieldset>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
      ;
    </div>
  );
};

export default InquirySection;
