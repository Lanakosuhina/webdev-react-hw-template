'use client'
import Bar from "@/components/Bar/Bar";
import Centerblock from "@/components/Centerblock/Centerblock";
import Container from "@/components/Container/Container";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css"
import { useEffect, useState } from "react";
import { DataTrack, getAllTracks } from "./api/trackAPI";

export default function Home() {
  const [tracks, setTracks] = useState<DataTrack[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTrack, setCurrentTrack] = useState<DataTrack | null>(null)

  useEffect(() => {
    getAllTracks()
      .then(response => {
        setTracks(response)
        setIsLoading(false)
      })
  }, [])
  console.log(currentTrack);

  return (
    <>
      <Wrapper>
        <Container>
          <main className={styles.main}>
            <Navigation />
            <Centerblock isLoading={isLoading} tracks={tracks} setCurrentTrack={setCurrentTrack} />
            <Sidebar />
          </main>
          {currentTrack ? <Bar currentTrack={currentTrack} /> : <></>}
          <footer className="footer" />
        </Container>
      </Wrapper>
    </>
  );
}
