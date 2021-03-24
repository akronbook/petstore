const bearerStore = {
    get(ctx) {
        if (!ctx.request.query || !ctx.request.query.jwt) {
            return
        }
        const {jwt} = ctx.request.query;
        if (jwt) {
            return {
                access_token: jwt,
            };
        }
    },
};

export default bearerStore;