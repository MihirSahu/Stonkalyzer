import { useState } from "react";
import Link from "next/link";


const ShortQuestion = (props: {
  question?: string;
  placeholder?: string;
  qid: number;
  onChange: (str: string, index: number) => void;
}) => {
  return (
    <>
      <span>{props.question || "What is your favorite color?"}</span>
      <input
        placeholder={props.placeholder || ""}
        style={{
          display: "block",
          borderRadius: 6,
          height: 60,
          width: "100%",
          marginTop: 5,
          marginBottom: 20,
          backgroundColor: "#494949",
          borderColor: "#CFCFCF",
          borderWidth: 1,
          padding: 20,
          outline: "none",
        }}
        onChange={(e) => {
          props.onChange(e.target.value, props.qid);
        }}
      />
    </>
  );
};

const MCQuestion = (props: {
  question?: string;
  options?: string[];
  qid: number;
  onChange: (str: string, index: number) => void;
}) => {
  const getRadios = () => {
    const arr: JSX.Element[] = [];
    props.options?.forEach((o) => {
      arr.push(
        <p>
          <input type="radio" name={`${props.qid}`} />
          {` ${o}`}
        </p>
      );
    });
    return arr;
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <span>{props.question || "What is your favorite color?"}</span>
      <br />
      {getRadios()}
    </div>
  );
};

const Form = () => {
  type questioninfo = {
    question?: string;
    placeholder?: string;
    qType: "SHORT" | "RADIO";
    options?: string[];
  };

  const questionInfo: questioninfo[] = [
    {
      qType: "RADIO",
      question: "How old are you?",
      options: ["I'm less than 40 years old", "I'm older than 40"],
    },
    {
      qType: "RADIO",
      question: "Are you investing for income or growth?",
      options: ["I'm investing for income", "I'm investing for growth"],
    },
    {
      qType: "RADIO",
      question: "How accessible do you want your investments to be?",
      options: ["I need to liquidate my investments frequently", "I don't need to liquidate my funds anytime soon"],
    },
    {
      qType: "RADIO",
      question: "How much do you expect to gain from your investments?",
      options: ["I want a stable steam of income from my investments", "I don't care much about a steady income"],
    },
    {
      qType: "RADIO",
      question: "How muchtime do you want your money to be invested for?",
      options: ["I'm investing for the short term", "I'm investing for the long term"],
    },
    {
      qType: "RADIO",
      question: "Do you want to invest in a stock, bond, or cash instrument?",
      options: ["Stock", "Bond", "Cash Instrument"],
    },
    {
      qType: "RADIO",
      question: "Do you want to invest in a stock, bond, or cash instrument?",
      options: ["Stock", "Bond", "Cash Instrument"],
    },
    {
      qType: "SHORT",
      question: "If you want to invest in a stock, what's the stock symbol?",
    },
  ];

  const [formData, setFormData] = useState<string[]>(() => {
    const fd: string[] = [];
    questionInfo.forEach(() => fd.push(""));
    return fd;
  });

  const getQuestions = () => {
    const questionComponents: JSX.Element[] = [];
    for (let i = 0; i < questionInfo.length; i++) {
      const curQuestionInfo = questionInfo[i];
      const CurQuestion =
        curQuestionInfo.qType === "SHORT" ? ShortQuestion : MCQuestion;
      questionComponents.push(
        <CurQuestion
          key={i}
          question={curQuestionInfo.question}
          placeholder={curQuestionInfo.placeholder}
          qid={i}
          options={curQuestionInfo.options}
          onChange={(str, i) => {
            formData[i] = str;
            setFormData(formData);
            console.log(JSON.stringify(formData));
          }}
        />
      );
    }
    return questionComponents;
  };

  return (
    <div
      style={{
        height: 700,
        width: 800,
        backgroundColor: "#343434",
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#CFCFCF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        margin: 10,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/Stonkalyzer.png" width="300px" />
      <br />
      <div className="w-full overflow-y-auto text-left text-[#cfcfcf]">
        {getQuestions()}
      </div>
      <Link legacyBehavior href="/result"><a className="mt-4 px-4 py-2 text-white hover:bg-stonkYellow hover:text-stonkBlack">Analyze!</a></Link>
    </div>
  );
};

export default Form;
