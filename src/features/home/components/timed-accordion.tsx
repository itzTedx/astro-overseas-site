"use client";

import { memo, useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const data = [
  {
    title: "Expert Immigration Guidance",
    content:
      "With over 15 years of experience, our certified immigration consultants provide expert guidance through complex visa processes. We maintain a 95% success rate in visa approvals across all categories.",
  },
  {
    title: "Comprehensive Documentation Support",
    content:
      "Our team handles all aspects of visa documentation, ensuring accuracy and completeness. We provide detailed checklists, document verification, and professional translation services when needed.",
  },
  {
    title: "Personalized Visa Solutions",
    content:
      "Every client receives a tailored visa strategy based on their unique circumstances. Our consultants analyze your profile and recommend the most suitable immigration pathways.",
  },
  {
    title: "Rapid Processing Times",
    content:
      "We expedite your application process through our established relationships with immigration authorities and efficient documentation procedures, reducing processing times by up to 40%.",
  },
  {
    title: "24/7 Client Support",
    content:
      "Access round-the-clock support through our dedicated client portal. Get real-time updates on your application status and instant responses to your queries.",
  },
  {
    title: "Global Recognition",
    content:
      "Trusted by over 10,000 successful immigrants worldwide. Our services are recognized by major immigration authorities and educational institutions globally.",
  },
];

const INTERVAL_TIME = 5000;
const TICK_INTERVAL = 10;

export const TimedAccordion = memo(function TimedAccordion() {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const handleItemClick = useCallback((index: number) => {
    setFeatureOpen(index);
    setTimer(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + TICK_INTERVAL);
    }, TICK_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > INTERVAL_TIME) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div itemScope itemType="https://schema.org/ItemList">
      <h2 className="sr-only">Why Choose Our Immigration Services</h2>
      <meta itemProp="numberOfItems" content={data.length.toString()} />
      <meta itemProp="itemListOrder" content="Unordered" />
      <div
        role="tablist"
        aria-label="Immigration services features"
        className="space-y-2"
      >
        {data.map((item, index) => (
          <AccordionItem
            key={item.title}
            index={index}
            item={item}
            isOpen={featureOpen === index}
            timer={featureOpen === index ? timer : 0}
            onClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
});

const AccordionItem = memo(function AccordionItem({
  index,
  item,
  isOpen,
  timer,
  onClick,
}: {
  index: number;
  item: { title: string; content: string };
  isOpen: boolean;
  timer: number;
  onClick: (index: number) => void;
}) {
  return (
    <div
      role="tab"
      aria-expanded={isOpen}
      className="transform-gpu rounded-xl border bg-white px-4"
      itemScope
      itemProp="itemListElement"
      itemType="https://schema.org/ListItem"
    >
      <meta itemProp="position" content={(index + 1).toString()} />
      <button
        className="w-full"
        onClick={() => onClick(index)}
        type="button"
        aria-controls={`content-${index}`}
        id={`tab-${index}`}
      >
        <div className="flex w-full items-center justify-between gap-4 py-4">
          <h3
            className="text-left text-xl font-medium text-blue-950"
            itemProp="name"
          >
            {item.title}
          </h3>
          <span
            className="inline-flex size-8 shrink-0 items-center justify-center font-sofia-condensed text-xl text-neutral-500"
            aria-hidden="true"
          >
            0{index + 1}
          </span>
        </div>
        <div
          id={`content-${index}`}
          role="tabpanel"
          aria-labelledby={`tab-${index}`}
          className={cn(
            "w-full transform-gpu overflow-hidden text-left text-neutral-600 transition-all duration-500",
            isOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <p className="pb-4 pt-2 text-lg" itemProp="description">
            {item.content}
          </p>
          <div className="w-full pb-4" aria-hidden="true">
            <div className="relative h-1 w-full overflow-hidden rounded-full">
              <div
                className="absolute left-0 top-0 z-10 h-1 rounded-full bg-blue-500"
                style={{ width: `${timer / 50}%` }}
              />
              <div className="absolute left-0 top-0 h-1 w-full bg-neutral-100" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
});

export default TimedAccordion;
