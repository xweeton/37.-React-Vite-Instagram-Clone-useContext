import { useContext } from "react";
import { Button, Col, Image } from "react-bootstrap";
import { ProfileContext } from "../App";

export default function ImageList({ onClick }) {
  const { lists } = useContext(ProfileContext);

  return (
    <Col className="d-flex justify-content-lg-between mb-5">
      {lists.map((list, index) => (
        <div key={index} className="mx-5">
          <Button
            className="bg-transparent border-0 p-1 mb-2"
            onClick={onClick}
          >
            <Image
              src={list.image}
              className="border border-2 p-1"
              height="80px"
              roundedCircle
            />
            <p className="text-center fs-6 fw-medium text-dark mt-2">
              {list.description}
            </p>
          </Button>
        </div>
      ))}
    </Col>
  );
}
