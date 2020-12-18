import { GraphQLServer } from "graphql-yoga"
import { Prisma } from "prisma-binding"
import { IResolvers } from "graphql-middleware/dist/types"
import { Query } from "./queries"
import { Mutation } from "./mutations"

const resolvers: IResolvers = { Query, Mutation }

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers,
	context: (req) => ({
		...req,
		db: new Prisma({
			typeDefs: "./src/generated/prisma.graphql", // the generated Prisma DB schema
			endpoint: "http://localhost:4466", // the endpoint of the Prisma DB service
			// secret: "mysecret123", // specified in database/prisma.yml
			debug: true, // log all GraphQL queries & mutations
		}),
	}),
})

server.start(() => console.log("Server is running on http://localhost:4000"))
