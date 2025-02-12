import ContactForm from "@/features/contact/form/contact-form";
import { ContactInfo } from "@/features/contact/sections/contact-info";
import { Header } from "@/features/contact/sections/header";

export default function ContactPage() {
  return (
    <main>
      <Header />

      <div>
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  );
}
