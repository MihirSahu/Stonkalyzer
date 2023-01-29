import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { Button } from "@/components/Button";
import LineChart from "@/components/LineChart";

import { stock } from "@/util/api";

export default function Home() {
  //stock("AAPL");

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

  return (
    <>
      <main className={styles.main}>
        <div>
          <div className="text-white">Hello, world!</div>
          <Button
            onclick={() => {
              console.log("This button was clicked!");
            }}
          />
          <LineChart coordinates={UserData.map(e => ({xData:e.year, yData:e.userGain})) } xlabel={"Users Gained"} />
        </div>
      </main>
    </>
  );
}
