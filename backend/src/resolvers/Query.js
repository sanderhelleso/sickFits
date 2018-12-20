const Query = {
    dogs(parent, args, ctx, ) {
        return [{name: 'Snickers'}, { name: 'Sunny'}]
    }
};

module.exports = Query;
