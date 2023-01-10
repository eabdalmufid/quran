import { useParams } from "react-router-dom";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListDoa from "../json/doa.json";

class ShowDetail extends Component {
  render() {
    return (
      <Card
        style={{ border: 0, borderRadius: "10px" }}
        className="noscale mt-4"
        body
      >
        <h5>{ListDoa[this.props.id].arab}</h5>
        <h4>{ListDoa[this.props.id].doa}</h4>
        <p>{ListDoa[this.props.id].latin}</p>
        <p>{ListDoa[this.props.id].id}</p>
        {/* <h3>
          Tahun Kelahiran {ListNabi[this.props.id].thn_kelahiran} Masehi & Wafat
          Pada Usia {ListNabi[this.props.id].usia}
        </h3>
        <p className="left">{ListNabi[this.props.id].description}</p> */}
      </Card>
    );
  }
}

function DetailPray() {
  const { key } = useParams();
  return (
    <div className="detail pt-4">
      <div className="container mt-5 pb-3">
        <ShowDetail id={key - 1} />
      </div>
    </div>
  );
}

export default DetailPray;
