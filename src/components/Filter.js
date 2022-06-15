import React from "react";
import { Rate } from "../components/Rate";
import { Container, Navbar } from "react-bootstrap";

export const Filter = ({ setTextSearch, setRateSearching, rateSearching }) => {
  return (
    <div className="Navbar">
      <Navbar>
        <Container>
          <Rate setRateSearching={setRateSearching} rating={rateSearching} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            onChange={(e) => setTextSearch(e.target.value)}
          />
        </Container>
      </Navbar>
    </div>
  );
};