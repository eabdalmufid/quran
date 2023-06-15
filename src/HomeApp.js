import Container from "react-bootstrap/Container";
import masjid from "./img/masque.png";
import quran from "./img/quran.png";
import mosque from "./img/mosque.png";
import pray from "./img/praying.png";
import kaaba from "./img/kaaba.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

function HomeApp() {
  const [value, setValue] = useState(new Date().toLocaleTimeString());
  const [quote, setQuote] = useState();
  const [shubuh, setShubuh] = useState();
  const [dhuhur, setDhuhur] = useState();
  const [ashar, setAshar] = useState();
  const [mahgrib, setMahgrib] = useState();
  const [isya, setIsya] = useState();
  const [hari, setHari] = useState();
  const tanggal = Moment().format("YYYY/MM/DD");

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    fetch("https://islamic-api-indonesia.herokuapp.com/api/data/quotes")
      .then((Response) => Response.json())
      .then((data) => {
        setQuote(data.result.text_id);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.myquran.com/v1/sholat/jadwal/1301/` + tanggal)
      .then((Response) => Response.json())
      .then((respon) => {
        setShubuh(respon.data.jadwal.subuh);
        setDhuhur(respon.data.jadwal.dzuhur);
        setAshar(respon.data.jadwal.ashar);
        setMahgrib(respon.data.jadwal.maghrib);
        setIsya(respon.data.jadwal.isya);
        setHari(respon.data.jadwal.tanggal);
      });
  }, []);

  return (
    <div className="homeapp">
      <div className="box">
        <Container className="pt-5 pb-3">
          <div className="card-box">
            <div className="jam">
              <h5>Jam Sekarang</h5>
              <h4>{value}</h4>
              <p>Jangan Lupa Beribadah </p>
            </div>
            <div className="gambar">
              <img src={masjid}></img>
            </div>
          </div>
        </Container>
      </div>
      <div className="feature">
        <Link to="/surah/" className="link-fitur">
          <div className="card-fitur">
            <img src={quran}></img>
            <h5>Al Quran</h5>
          </div>
        </Link>
        <Link to="/surah/" className="link-fitur">
          <div className="card-fitur">
            <img src={mosque}></img>
            <h5>Jadwal Sholat</h5>
          </div>
        </Link>
        <Link to="/story/" className="link-fitur">
          <div className="card-fitur">
            <img src={kaaba}></img>
            <h5>Kisah Nabi</h5>
          </div>
        </Link>
        <Link to="/pray/" className="link-fitur">
          <div className="card-fitur">
            <img src={pray}></img>
            <h5>Doa Sehari hari</h5>
          </div>
        </Link>
      </div>

      <div className="showAll">
        <button>Tampilkan Semua</button>
      </div>

      <div className="quote">
        <h5>{quote}</h5>
      </div>

      <div className="info">
        <h4>Jadwal Sholat</h4>
        <h5>{hari}</h5>
      </div>

      <div className="sholat">
        <div className="card-sholat">
          <h4>{shubuh}</h4>
          <h5>Shubuh</h5>
        </div>
        <div className="card-sholat">
          <h4>{dhuhur}</h4>
          <h5>Dzuhur</h5>
        </div>
        <div className="card-sholat">
          <h4>{ashar}</h4>
          <h5>Ashar</h5>
        </div>
        <div className="card-sholat">
          <h4>{mahgrib}</h4>
          <h5>Maghrib</h5>
        </div>
        <div className="card-sholat">
          <h4>{isya}</h4>
          <h5>Isya</h5>
        </div>
      </div>

      <div className="penutup">
        <h3>@eabdalmufid_</h3>
      </div>
    </div>
  );
}

export default HomeApp;
