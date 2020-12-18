export const Mutation = {
	createTask: (_, args, context, info) => {
		return context.prisma.mutation.createTask(
			{
				data: {
					title: args.title,
					description: args.description,
					criteria: args.criteria,
					status: args.status,
					category: {
						connect: {
							id: args.categoryId,
						},
					},
					estimate: args.estimate,
					owner: {
						connect: {
							id: args.ownerId,
						},
					},
					responsible: {
						connect: {
							id: args.responsibleId,
						},
					},
				},
			},
			info
		)
	},
	updateTask: (_, args, context, info) => {
		return context.prisma.mutation.updateTask(
			{
				where: {
					id: args.id,
				},
				data: {
					title: args.title,
					description: args.description,
					criteria: args.criteria,
					status: args.status,
					category: {
						connect: {
							id: args.categoryId,
						},
					},
					estimate: args.estimate,
					owner: {
						connect: {
							id: args.ownerId,
						},
					},
					responsible: {
						connect: {
							id: args.responsibleId,
						},
					},
				},
			},
			info
		)
	},
	deleteTask: (_, args, context, info) => {
		return context.prisma.mutation.deleteTask(
			{
				where: {
					id: args.id,
				},
			},
			info
		)
	},
	createUser: (_, args, context, info) => {
		return context.prisma.mutation.createUser(
			{
				data: {
					relationId: args.relationId,
					imgPath: args.imgPath,
				},
			},
			info
		)
	},
	createCategory: (_, args, context, info) => {
		return context.prisma.mutation.createCategory(
			{
				data: {
					name: args.name,
				},
			},
			info
		)
	},
}
