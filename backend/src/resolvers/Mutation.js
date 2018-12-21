const Mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO: Check if they are logged in

		console.log(ctx.db.mutation);
        const item = await ctx.db.mutation.createItem({
				data: {
					...args,
				},
			},
			info
        );
    
        console.log(item);
        return item;
    },

    updateItem(parent, args, ctx, info) {

        // take copy of the updates
        const updates = { ...args };

        // remove the ID from updates
        delete updates.id;

        // update item
        return ctx.db.mutation.updateItem(
            {
                data: updates,
                where: {
                    id: args.id
                }
            }, 
            info
        );
    }
};

module.exports = Mutations;
