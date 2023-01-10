import ListNabi from "./json/nabi.json";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Story() {
  return (
    <div className="Home">
      <Container className="pt-5 pb-3">
        {ListNabi.map((nabi, index) => (
          <Link className="linkto" to={`${index + 1}`}>
            <Card
              style={{ border: 0, borderRadius: "10px" }}
              className="mt-4"
              body
            >
              <h4>Kisah {nabi.name}</h4>
              <p>
                Tahun Kelahiran {nabi.thn_kelahiran} Masehi & Wafat Pada Usia{" "}
                {nabi.usia}
              </p>
            </Card>
          </Link>
        ))}
      </Container>
      <div className="footer">@eabdalmufid_</div>
    </div>
  );
}

export default Story;
