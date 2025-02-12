"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { sendEmail } from "../actions/contact";
import { LoadingTextSwap } from "../components/loading-swap-text";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setErrors(null);
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await sendEmail(formData);

      if (response.success) {
        setStatus("Message sent successfully!");
        toast.success("Message sent successfully!");
        formRef.current?.reset();
        router.refresh();
      } else {
        setErrors(
          response.errors || { general: [response.message || "Error"] }
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="col-span-2 space-y-6"
    >
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="John Doe" required />
        {errors?.name && (
          <p className="text-sm text-red-500">{errors.name[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          required
        />
        {errors?.email && (
          <p className="text-sm text-red-500">{errors.email[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+971987654321"
          required
        />
        {errors?.phone && (
          <p className="text-sm text-red-500">{errors.email[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Type your message..."
          required
          className="field-sizing-content min-h-28"
        />
        {errors?.message && (
          <p className="text-sm text-red-500">{errors.message[0]}</p>
        )}
      </div>

      {errors?.general && (
        <p className="text-sm text-red-500">{errors.general[0]}</p>
      )}
      {status && <p className="text-sm text-green-500">{status}</p>}

      <Button type="submit" className="w-full" disabled={isLoading}>
        <LoadingTextSwap isLoading={isLoading}>Send Message</LoadingTextSwap>
      </Button>
    </form>
  );
}
