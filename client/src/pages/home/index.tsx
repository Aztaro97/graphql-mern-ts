import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useQuery } from "urql";
import Column from "../../components/column/column";
import { queryClients } from "../../graphql/queries/clientQuery";

const HomePage = () => {
  const [results] = useQuery({
    query: queryClients,
  });

  const { data, fetching, error } = results;

  if (fetching) return <div>Loading ....</div>;
  if (error) return console.log(error);

  data && console.log(data);


  return (
    <Container>
      <Column className="bg-indigo-600" title="Not Started" />
      <Column className="bg-purple-700" title="In process" />
      <Column className="bg-green-900" title="completes" />
    </Container>
  );
};

const Container = styled.div`
  ${tw`
  	grid
	grid-cols-1
	md:grid-cols-3
	gap-4
	place-items-center
	py-5
	px-4
  `}
`;

export default HomePage;
