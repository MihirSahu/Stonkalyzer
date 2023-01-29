import { stock } from "@/util/api";
import LineChart from "./LineChart";

const MiniStock = (props: {
  label: string;
  symbol: "NDAQ" | "SPY" | "DJIA";
}) => {
  const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];

  const theing = () => {
    const arr = [];
    for (let i = 0; i < 18; i++) {
      arr.push({
        xData: i,
        yData: Math.random() * 1,
      });
    }
    return arr;
  };
  return (
    <div
      style={{
        height: 220,
        width: 500,
        backgroundColor: "#343434",
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#CFCFCF",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        margin: 10,
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: 30,
          color: "#CFCFCF",
          fontWeight: "bold",
        }}
      >
        {props.label}
      </span>
      <LineChart coordinates={theing()} xlabel={""} />
    </div>
  );
};

export default MiniStock;
