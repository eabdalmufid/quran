import { useParams } from "react-router-dom";
import ListNabi from "./json/nabi.json";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";

class ShowDetail extends Component {
  render() {
    return (
      <Card
        style={{ border: 0, borderRadius: "10px" }}
        className="noscale mt-4"
        body
      >
        <img src={ListNabi[this.props.id].image_url}></img>
        <h4 className="left">{ListNabi[this.props.id].name}</h4>
        <h3>
          Tahun Kelahiran {ListNabi[this.props.id].thn_kelahiran} Masehi & Wafat
          Pada Usia {ListNabi[this.props.id].usia}
        </h3>
        <p className="left">{ListNabi[this.props.id].description}</p>
      </Card>
    );
  }
}

function DetailNabi() {
  const { key } = useParams();
  return (
    <div className="detail pt-4">
      <div className="container mt-5 pb-3">
        <ShowDetail id={key - 1} />
      </div>
    </div>
  );
}

export default DetailNabi;
