import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import profil from "../img/profil.png";

import React, { Component } from "react";

class NavBars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
    };
  }

  handleKlik = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    return (
      <Navbar fixed="top" variant="dark">
        <Container>
          <div className="brand" style={{ color: "#6F7865" }}>
            <img className="img-profil" src={profil}></img>
            <div className="text">
              <p>Assalamualaikum</p>
              <h5>IslamKu</h5>
            </div>
          </div>
          <div className="btn-active" onClick={this.handleKlik}>
            {this.state.status === false ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            )}
          </div>
          {this.state.status === true ? (
            <div className="background-black"></div>
          ) : (
            <div className="background-clear"></div>
          )}
          <div
            className={
              this.state.status === true ? "me-auto active-navbar" : "me-auto"
            }
          >
            <h5>IslamKu.Id</h5>

            {/* <h4>Fitur Tersedia</h4> */}
            <Link onClick={this.handleKlik} to="/">
              Home
            </Link>
            <Link onClick={this.handleKlik} to="/surah/">
              Al Quran
            </Link>
            <Link onClick={this.handleKlik} to="/story/">
              Kisah Nabi
            </Link>
            <Link onClick={this.handleKlik} to="/pray/">
              Doa Doa Sehari Hari
            </Link>

            <h4>Kontak Developer</h4>
            <div className="me">
              <a href="https://github.com/eabdalmufid_">Github</a>
            </div>

            <div className="foot">@eabdalmufid_</div>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default NavBars;

// https://islamic-api-indonesia.herokuapp.com/api/data/quotes
// https://api.myquran.com/v1/sholat/jadwal/1605/2022/09/13
