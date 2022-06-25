import React from "react";
// import styled from "styled-components";
import tw, { styled } from "twin.macro";

const SingleProject = () => {
  return (
    <ProjectWrapper>
      <Title className=" ">Web Design</Title>
      <Paragraph className="text-gray-400 truncate my-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia labore
        iure odio earum adipisci? Quasi alias nam unde
      </Paragraph>
      <ClientProfile>
        <img
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          alt="Profile"
        />
        <h3 className="dark:text-white text-black">Moussa</h3>
      </ClientProfile>
      <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l capitalize me-auto">
        view more
      </Button>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  ${tw`border border-2 border-gray-200 p-4 cursor-pointer`}
`;

const Title = styled.h1`
  ${tw`text-3xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600`}
`;

const Paragraph = styled.p`
  //   ${`text-2xl truncate hover:text-ellipsis`};
`;

const ClientProfile = styled.div`
  ${tw`flex flex-row items-center gap-2 mt-3`}

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

const Button = styled.button`
  ${tw`text-white py-2 px-4 rounded-md mt-3 mr-auto float-right`}
`;

export default SingleProject;
