import ContactForm from "@/features/contact/form/contact-form";
import { ContactInfo } from "@/features/contact/sections/contact-info";
import { Header } from "@/features/contact/sections/header";

export default function ContactPage() {
  return (
    <main className="container max-w-5xl py-12 pb-24">
      <Header />

      <div className="grid grid-cols-3 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  );
}
