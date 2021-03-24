export default function(keycloak) {
    return async function grantAttacher(ctx, next) {
      ctx.state.kauth.grant = await keycloak.getGrant(ctx);
      await next();
    };
  }