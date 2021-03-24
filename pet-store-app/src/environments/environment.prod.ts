export const environment = {
  production: true,
  keycloak: {
    issuer: 'http://localhost:8081/auth/',
    realm: 'petshop-realm',
    clientId: 'petstore-portal'
  }
};
