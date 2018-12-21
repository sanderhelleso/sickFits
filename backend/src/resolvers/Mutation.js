const Mutations = {

    // create a new item
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

    // update an existing item
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
    },

    // delete an existing item
    async deleteItem(parent, args, ctx, info) {
        const where = { id: args.id };

        // find item
        const item = await ctx.db.query.item({ where }, `{ id title }`);

        // check if user owns item or have permission
        // todo

        // delete the item
        return ctx.db.mutation.deleteItem({ where }, info);
    }


};

module.exports = Mutations;
