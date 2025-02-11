import { IconFaq } from "@/assets/icon-faq";
import { IconVisa } from "@/assets/icon-visa";

import { Accordion } from "../components/accordion";

const faqs = [
  {
    question: "What services does Astro Overseas provide?",
    answer:
      "We provide comprehensive immigration services including work permits, student visas, visitor visas, and permanent residency applications. Our expertise spans across Canada, Europe, Australia, and New Zealand, with specialized services for each destination country.",
  },
  {
    question: "How long does the visa process typically take?",
    answer:
      "We provide comprehensive immigration services including work permits, student visas, visitor visas, and permanent residency applications. Our expertise spans across Canada, Europe, Australia, and New Zealand, with specialized services for each destination country.",
  },
  {
    question:
      "What makes Astro Overseas different from other immigration consultants?",
    answer:
      "We provide comprehensive immigration services including work permits, student visas, visitor visas, and permanent residency applications. Our expertise spans across Canada, Europe, Australia, and New Zealand, with specialized services for each destination country.",
  },
  {
    question: "Which countries offer the best work permit opportunities?",
    answer:
      "We provide comprehensive immigration services including work permits, student visas, visitor visas, and permanent residency applications. Our expertise spans across Canada, Europe, Australia, and New Zealand, with specialized services for each destination country.",
  },
  {
    question: "What are the basic requirements for a work permit?",
    answer:
      "We provide comprehensive immigration services including work permits, student visas, visitor visas, and permanent residency applications. Our expertise spans across Canada, Europe, Australia, and New Zealand, with specialized services for each destination country.",
  },
];

export function Faqs() {
  return (
    <section id="faq" className="container grid gap-6 pb-24 md:grid-cols-2">
      <div className="space-y-6 max-md:order-2">
        <div className="flex gap-3 max-md:flex-col md:items-center">
          <IconFaq className="max-md:size-12" />
          <div>
            <h2 className="text-xl font-semibold md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p>
              Answers to common questions about visas, immigration, and working
              abroad.
            </p>
          </div>
        </div>

        <Accordion items={faqs} />
      </div>
      <div className="flex items-center justify-center max-md:order-1">
        <IconVisa className="max-md:h-auto max-md:w-1/2" />
      </div>
    </section>
  );
}
