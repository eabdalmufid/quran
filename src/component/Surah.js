import Card from "react-bootstrap/Card";
import ListQuran from "../json/quran.json";
import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";

class Surah extends Component {
  render() {
    const number =
      "000".substring(0, "000".length - this.props.number.length) +
      this.props.number;
    const LinkAudio = `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${number}.mp3`;
    return (
      <div>
        <ReactAudioPlayer className="audioclass" src={LinkAudio} controls />
        {this.props.number == 1 ? (
          <div></div>
        ) : (
          <Card
            style={{ border: 0, borderRadius: "10px" }}
            className="noscale shadow mt-4 text-center"
            body
          >
            <h5 className="center">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h5>
            <p className="center">
              Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang.
            </p>
          </Card>
        )}

        {ListQuran[this.props.number - 1].verses.map((bismillah, index) => (
          <Card
            style={{ border: 0, borderRadius: "10px" }}
            className="noscale shadow mt-3"
            body
          >
            <h5>{bismillah.text}</h5>
            <p>
              {index + 1}. {bismillah.translation_id}
            </p>
          </Card>
        ))}
      </div>
    );
  }
}
export default Surah;
