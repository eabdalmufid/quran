import Container from "react-bootstrap/Container";
import ListDoa from "./json/doa.json";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Pray() {
  return (
    <div className="Home">
      <Container className="pt-5 pb-3">
        {ListDoa.map((doa, index) => (
          <Link className="linkto" to={`${index + 1}`}>
            <Card
              style={{
                border: 0,
                borderRadius: "10px",
              }}
              className="mt-4"
              body
            >
              <h4 className="left">{doa.doa}</h4>
            </Card>
          </Link>
        ))}
      </Container>
    </div>
  );
}

export default Pray;
