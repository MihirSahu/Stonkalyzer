import { useState } from "react";

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
        placeholder={props.placeholder || "Red"}
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

const Form = () => {
  type questioninfo = {
    question?: string;
    placeholder?: string;
  };

  const questionInfo: questioninfo[] = [
    {
      question: "What's your favorite idea?",
      placeholder: "Mine is being creative",
    },
    {
      question: "How do you get the idea?",
      placeholder: "I just start to think creatively",
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
      questionComponents.push(
        <ShortQuestion
          key={i}
          question={curQuestionInfo.question}
          placeholder={curQuestionInfo.placeholder}
          qid={i}
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
      }}
    >
      <h1
        style={{
          fontFamily: "monospace",
          fontSize: 50,
          color: "#CFCFCF",
          fontWeight: "bold",
        }}
      >
        stonkalyzer
      </h1>
      <br />
      <div className="overflow-y-auto text-left text-[#cfcfcf]">
        {getQuestions()}
      </div>
    </div>
  );
};

export default Form;
