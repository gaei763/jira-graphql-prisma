export const Query = {
	categories: (_, args, context, info) => {
		return context.prisma.query.categories({}, info)
	},
	tasks: (_, args, context, info) => {
		return context.prisma.query.tasks({}, info)
	},
	loginuser: (_, args, context, info) => {
		return context.prisma.query.loginuser(
			{
				where: {
					id: args.id,
				},
			},
			info
		)
	},
	users: (_, args, context, info) => {
		return context.prisma.query.users({}, info)
	},
}
