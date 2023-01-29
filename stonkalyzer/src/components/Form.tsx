import { useState } from "react";
import Image from "next/image";

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
      question: "Are you investing for income or growth?",
      options: ["Income", "Growth"],
    },
    {
      qType: "RADIO",
      question: "How accessible do you want your investments to be?",
      options: ["Option A", "Option B"],
    },
    {
      qType: "RADIO",
      question: "How much do you expect to gain from your investments?",
      options: ["Option A", "Option B"],
    },
    {
      qType: "RADIO",
      question: "How muchtime do you want your money to be invested for?",
      options: ["Option A", "Option B"],
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
        width: 500,
        backgroundColor: "#343434",
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#CFCFCF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        margin: 10,
      }}
    >
      <img src="/Stonkalyzer.png" />
      <br />
      <div className="overflow-y-auto text-left text-[#cfcfcf]">
        {getQuestions()}
      </div>
    </div>
  );
};

export default Form;
