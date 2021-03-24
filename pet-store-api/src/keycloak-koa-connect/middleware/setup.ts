export default async function setup(ctx, next) {
    ctx.state.kauth = {};
    await next();
  }