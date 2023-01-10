import Kartu from "./component/Card";
import ListQuran from "./quran.json";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="Home">
      <Container className="pt-5 pb-3">
        {ListQuran.map((quran, index) => (
          <Link
            data-aos="fade-left"
            className="linkto"
            to={`${quran.number_of_surah}`}
          >
            <Kartu
              nomor={index}
              surah={quran.name}
              arti={quran.name_translations.id}
              ayat={quran.number_of_ayah}
              turun={quran.place}
            />
          </Link>
        ))}
      </Container>
      <div className="footer">@eabdalmufid_</div>
    </div>
  );
}

export default Home;
