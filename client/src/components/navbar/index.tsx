import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const NavBar = () => {
  return (
    <Container>
      <h1>Add client</h1>
      <h1>Add product</h1>
    </Container>
  );
};

const Container = styled.div`
  ${tw`
	flex
	justify-between
	px-3
	bg-blue-600
	py-4
	text-white
	`}
`;

export default NavBar;
