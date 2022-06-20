import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Column from "../../components/column/column";

const HomePage = () => {
  return (
    <Container>
      <Column className="bg-indigo-600" title="Not Started" />
      <Column className="bg-purple-700" title="In process" />
      <Column className="bg-green-900" title="completes"/>
    </Container>
  );
};

const Container = styled.div`
  ${tw`
  	grid
	grid-cols-3
	gap-4
	place-items-center
	py-5
  `}
`;

export default HomePage;
