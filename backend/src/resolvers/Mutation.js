const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    },

    // signup user
    async signup(parent, args, ctx, info) {

        // lowercase email
        args.email = args.email.toLowerCase();

        // hash password
        const password = await bcrypt.hash(args.password, 10);

        // create user in database
        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                password,
                permissions:  { set: ['USER'] }
            }
        }, info);

        // create JWT token
        const token = jwt.sign({
            userId: user.id
        }, process.env.APP_SECRET);

        // set JWT as cookie on response
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
        });

        // return user to the browser
        return user;


    }


};

module.exports = Mutations;
