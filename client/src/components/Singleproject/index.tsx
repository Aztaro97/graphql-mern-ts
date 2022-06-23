import React from "react";
// import styled from "styled-components";
import tw, { styled } from "twin.macro";

const SingleProject = () => {
  return (
    <ProjectWrapper>
      <Title>Web Design</Title>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia labore
        iure odio earum adipisci? Quasi alias nam unde
      </Paragraph>
      <p className="text-red-400 text-xxl truncate hover:text-ellipsis">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sit
        mollitia est consectetur! Ad, eos. Doloribus eius harum, aut quisquam
        quia est reiciendis at iusto nisi quas neque praesentium non!
      </p>
      <ClientProfile>
        <img
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          alt="Profile"
        />
        <h3>Moussa</h3>
      </ClientProfile>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  ${tw`border border-2 border-gray-200 p-4`}
`;

const Title = styled.h1`
  ${tw`text-black text-3xl font-bold`}
`;

const Paragraph = styled.p`
  ${`text-red-400 text-xxl truncate hover:text-ellipsis`}
`;

const ClientProfile = styled.div`
  ${tw`flex flex-row gap-4 mt-3`}

  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  & h3 {
    ${`font-bold mt-4`};
    font-weight: bold;
  }
`;

export default SingleProject;
