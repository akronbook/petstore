const bodyStore = {
    get(ctx) {
        if (!ctx.request.body || !ctx.request.body.jwt) {
            return
        }const {jwt} = ctx.request.body;
        if (jwt) {
            return {
                access_token: jwt,
            };
        }
    },
};

export default bodyStore;