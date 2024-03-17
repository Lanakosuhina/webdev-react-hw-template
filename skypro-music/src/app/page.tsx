import Bar from "@/components/Bar/Bar";
import Centerblock from "@/components/Centerblock/Centerblock";
import Container from "@/components/Container/Container";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css"
import { useEffect, useState } from "react";
import { DataTrack } from "./api/trackAPI";


async function getData() {
  const res = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/");

  if (!res.ok) {
    throw new Error('Ошибка при получении данных');
  }
  return res.json()
}

export default async function Home() {
  const data = await getData();


  return (
    <>
      <Wrapper>
        <Container>
          <main className={styles.main}>
            <Navigation />
            <Centerblock tracks={data} />
            <Sidebar />
          </main>
          <Bar tracks={data} />
          <footer className="footer" />
        </Container>
      </Wrapper>
    </>
  );
}
