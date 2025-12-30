"use client"

import { useState } from "react"

const faqs = [
  {
    question: "1. How involved do I need to be during the project?",
    answer:
      "You only need to share your content, preferences, and feedback at important stages. We handle the complete design, development, testing, and launch process.",
  },
  {
    question: "2. How long does it take to build a website?",
    answer:
      "Most websites are completed within 2–6 weeks, depending on the number of pages, design direction, and required features.",
  },
  {
    question: "3. Do you provide support after the website is launched?",
    answer:
      "Yes. We offer post-launch maintenance, content updates, and technical support to ensure your website continues to perform well.",
  },
  {
    question: "4. Do you create responsive and eCommerce websites?",
    answer:
      "Absolutely. Every site we build is fully responsive, and we also develop complete eCommerce stores with payment integration and custom product layouts.",
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto py-20 scroll-mt-24" id="faq">
      <h2 className="text-center text-[clamp(2.5rem,5vw,6rem)] pb-20">
        Frequently Asked <span className="italic">Questions</span>
      </h2>

      <div className="border rounded-lg divide-y">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-5 font-medium text-left hover:bg-neutral-700 transition"
              >
                <span>{item.question}</span>

                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m5 15 7-7 7 7"
                  />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 text-white">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faq
