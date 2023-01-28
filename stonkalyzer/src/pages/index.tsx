import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { Button } from '@/components/Button'
import { useState } from 'react'
import LineChart from '@/components/LineChart'

import { stock } from '@/util/api'


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

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <main className={styles.main}>
        <div>
          <div className="text-white">Hello, world!</div>
          <Button onclick={() => console.log("This button was clicked!")}/>
          <LineChart chartData={userData} />
        </div>
      </main>
    </>
  )
}
