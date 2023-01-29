import Form from "@/components/Form";
import MiniStock from "@/components/MiniStock";

export const start = () => {
  return (
    <div style={{ flexDirection: "row", display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MiniStock label="NASDAQ" symbol="NDAQ" />
        <MiniStock label="S&P 500" symbol="SPY" />
        <MiniStock label="Dow Jones" symbol="DJIA" />
      </div>
      <Form />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MiniStock label="NASDAQ" symbol="NDAQ" />
        <MiniStock label="S&P 500" symbol="SPY" />
        <MiniStock label="Dow Jones" symbol="DJIA" />
      </div>
    </div>
  );
};

export default start;
