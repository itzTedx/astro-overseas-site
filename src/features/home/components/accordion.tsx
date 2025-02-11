"use client";

import Link from "next/link";
import type React from "react";
import { memo, useState } from "react";

import { IconChevronRight } from "@tabler/icons-react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = memo(
  ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const headingId = `accordion-heading-${index}`;
    const contentId = `accordion-content-${index}`;

    return (
      <div
        itemScope
        itemProp="mainEntity"
        itemType="https://schema.org/Question"
        className="border-b last:border-b-0"
      >
        <h3>
          <button
            className="flex w-full items-center justify-between py-4 text-left text-xl font-medium transition-all hover:text-blue-700"
            onClick={() => setIsOpen(!isOpen)}
            itemProp="name"
            aria-expanded={isOpen}
            aria-controls={contentId}
            id={headingId}
          >
            {question}
            <ChevronDown
              className={`h-4 w-4 shrink-0 transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
        </h3>
        <div
          id={contentId}
          role="region"
          aria-labelledby={headingId}
          className={`grid transition-all duration-200 ${
            isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
          }`}
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <div className="overflow-hidden">
            <p itemProp="text" className="pb-6 text-neutral-600">
              {answer}
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full"
              size="lg"
            >
              <Link href="#" aria-label={`Learn more about ${question}`}>
                Learn More
                <IconChevronRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

interface AccordionProps {
  items: Omit<AccordionItemProps, "index">[];
}

export const Accordion: React.FC<AccordionProps> = memo(({ items }) => {
  return (
    <section
      itemScope
      itemType="https://schema.org/FAQPage"
      aria-label="Frequently Asked Questions"
    >
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} index={index} />
      ))}
    </section>
  );
});

Accordion.displayName = "Accordion";
