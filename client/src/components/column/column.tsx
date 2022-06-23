import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Singleproject from "../Singleproject";

interface props {
  className?: string;
  title: string;
}

const Column: React.FC<props> = ({ className, title }) => {
  return (
    <Container>
      <TitleWrapper className={className}>
        <h1>{title}</h1>
      </TitleWrapper>
      <ContentWrapper>
        <Singleproject />
        <Singleproject />
        <Singleproject />
        <Singleproject />
      </ContentWrapper>
    </Container>
  );
};

const TitleWrapper = styled.div`
  ${tw`
	w-full
	py-4
	text-white
	text-center
  `}

  & h1 {
    ${tw`
	font-bold
	capitalize
  `}
  }
`;

const Container = styled.div`
  width: 100%;
`;
const ContentWrapper = styled.div`
  ${tw`flex flex-col gap-3 mt-4 p-2 border border-gray-200`}
`;

export default Column;
