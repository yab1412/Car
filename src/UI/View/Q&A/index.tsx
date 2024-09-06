"use client";

import React, { useState } from "react";
import style from "./index.module.scss";
import { Gutter } from "@/UI/Components/Gutter";
import { Icons } from "@/UI/Components/Icons";

const qandaData = [
  {
    question: "How do I get started with Car Rental?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    question: "Can I rent a car with a debit card?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    question: "What kind of Car Rental do I need?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    question: "What is a rental car security deposit?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    question: "Can I cancel or modify my reservation?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    question: "Is it possible to extend my rental period?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
];

export const QandA = () => {
  const [showAnswer, setShowAnswer] = useState<Record<string, boolean>>({}); 
  

  const handleSelect = (question: string) => {

     setShowAnswer((prevShowAnswer) => {
       const newShowAnswer = { ...prevShowAnswer };
       Object.keys(newShowAnswer).forEach((key) => {
         newShowAnswer[key] = false;
       });
       newShowAnswer[question] = true;
       return newShowAnswer;
     });

    if (showAnswer[question]) {
      setShowAnswer((prevShowAnswer) => ({
        ...prevShowAnswer,
        [question]: false,
      }));
    } else {
      setShowAnswer((prevShowAnswer) => ({
        ...prevShowAnswer,
        [question]: true,
      }));
    }
  };

  return (
    <Gutter className={style.container}>
      <div className={style.main}>
        <div className={style.title}>
          <div className={style.head}>
            <h4>Do You Have</h4>
            <h1>Any Questions?</h1>
          </div>
        </div>
        <div className={style.content}>
          {qandaData.map((item, key) => (
            <div key={key} className={style.questions}>
              <div
                className={style.question}
                onClick={() => handleSelect(item.question)}
              >
                <h2>{item.question}</h2>
                <button onClick={() => handleSelect(item.question)}>
                  {showAnswer[item.question] ? (
                    <Icons.UpArrow size={10} />
                  ) : (
                    <Icons.DownArrow size={10} />
                  )}
                </button>
              </div>
              <div className={style.line}></div>
              {showAnswer[item.question] && (
                <div className={style.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Gutter>
  );
};
