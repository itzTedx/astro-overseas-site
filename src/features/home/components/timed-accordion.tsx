"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const data = [
  {
    title: "Expert Guidance, Seamless Process",
    content:
      "Navigating visa applications can be complex, but our team of experienced immigration consultants ensures a hassle-free journey. From documentation to approvals, we guide you every step of the way.",
  },
  {
    title: "High Success Rate, Proven Results",

    content:
      "Navigating visa applications can be complex, but our team of experienced immigration consultants ensures a hassle-free journey. From documentation to approvals, we guide you every step of the way.",
  },
  {
    title: "End-to-End Visa Solutions",
    content:
      "Navigating visa applications can be complex, but our team of experienced immigration consultants ensures a hassle-free journey. From documentation to approvals, we guide you every step of the way.",
  },
  {
    title: "Fast & Reliable Processing",
    content:
      "Navigating visa applications can be complex, but our team of experienced immigration consultants ensures a hassle-free journey. From documentation to approvals, we guide you every step of the way.",
  },
  {
    title: "Personalized Support & Consultation",
    content:
      "Navigating visa applications can be complex, but our team of experienced immigration consultants ensures a hassle-free journey. From documentation to approvals, we guide you every step of the way.",
  },
  {
    title: "Trusted by Thousands Worldwide",
    content:
      "Navigating visa applications can be complex, but our team of experienced immigration consultants ensures a hassle-free journey. From documentation to approvals, we guide you every step of the way.",
  },
];

export function TimedAccordion() {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 5000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div>
      {data.map((item, index) => (
        <button
          className="w-full"
          key={item.title}
          onClick={() => {
            setFeatureOpen(index);
            setTimer(0);
          }}
          type="button"
        >
          <TextComponent
            content={item.content}
            isOpen={featureOpen === index}
            loadingWidthPercent={featureOpen === index ? timer / 50 : 0}
            number={index + 1}
            title={item.title}
          />
        </button>
      ))}
    </div>
  );
}

export default TimedAccordion;
function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent,
}: Readonly<{
  number: number;
  title: string;
  content: string;
  isOpen: boolean;
  loadingWidthPercent?: number;
}>) {
  return (
    <div className={cn("transform-gpu transition-all")}>
      <div className="flex w-full items-center justify-between gap-4 py-4">
        <h2 className={cn("text-left text-xl font-medium text-blue-950")}>
          {title}
        </h2>
        <p
          className={cn(
            "inline-flex size-8 shrink-0 items-center justify-center font-sofia-condensed text-xl text-neutral-500"
          )}
        >
          0{number}
        </p>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left text-neutral-600 transition-all duration-500 dark:text-neutral-400",
          isOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <p className="py-2 text-lg">{content}</p>
        <div className="w-full pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full">
            <div
              className={cn(
                "absolute left-0 top-0 z-10 h-1 rounded-full bg-neutral-500"
              )}
              style={{ width: `${loadingWidthPercent}%` }}
            />
            <div
              className={cn("absolute left-0 top-0 h-1 w-full bg-neutral-100")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
