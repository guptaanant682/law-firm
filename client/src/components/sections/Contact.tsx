import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit inquiry");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for your message. I will review your correspondence shortly.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-sans font-bold tracking-[0.2em] text-secondary uppercase mb-4">Correspondence</h2>
            <h3 className="text-4xl font-heading font-bold text-foreground mb-8">Get in Touch</h3>
            <p className="text-lg text-muted-foreground font-serif mb-12">
              Available for legal consultation, policy analysis, and speaking engagements regarding Cyber Law and AI Governance.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Email</h4>
                  <a href="mailto:parulkhohal14@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    parulkhohal14@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Location</h4>
                  <p className="text-muted-foreground">
                    Gandhinagar, Gujarat / Kurukshetra, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Social</h4>
                  <div className="flex gap-4 mt-1">
                     <a href="https://linkedin.com/in/parul-kumar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                     <span className="text-muted-foreground/30">|</span>
                     <a href="https://github.com/Parulkumar51" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-lg shadow-lg border border-border relative">
             {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
              <div className="absolute top-[-40px] right-[-40px] w-20 h-20 bg-secondary rotate-45 transform" />
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Adv. John Doe" {...field} className="bg-muted/50" data-testid="input-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-muted/50" data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Legal Consultation / Collaboration" {...field} className="bg-muted/50" data-testid="input-subject" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please detail your inquiry..." 
                          className="min-h-[150px] bg-muted/50 resize-none" 
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-heading"
                  disabled={mutation.isPending}
                  data-testid="button-submit"
                >
                  {mutation.isPending ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
