import { createClient } from "urql";

const client = createClient({
	url: "http://localhost:5000/graphql" as any,
	// requestPolicy: 'cache-and-network',
})


// https://vercel.saleor.cloud/graphql



export { client };