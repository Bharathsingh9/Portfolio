"use client"

import * as React from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [currentWord, setCurrentWord] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBetweenWords = 2000;

    const handleType = () => {
      const fullWord = words[currentWord].text;
      
      if (isDeleting) {
        setText(fullWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(fullWord.substring(0, text.length + 1));
        if (text.length === fullWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }
    };

    const timer = setTimeout(
      handleType,
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWord, words]);

  return (
    <div className={cn("inline-flex", className)}>
      <div className="text-left">
        <span className={cn(words[currentWord]?.className)}>{text}</span>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-6 md:h-10 lg:h-14 bg-primary ml-1",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
