import KeycloakConnect from "../keycloak-koa-connect/index";
import bodyStore from "../keycloak-koa-connect/stores/body-store";
import queryStore from "../keycloak-koa-connect/stores/query-store";

export const keycloak = new KeycloakConnect({ store: [queryStore, bodyStore] }, {
    realm: "petshop-realm",
    serverUrl: "http://localhost:8081/auth",
    clientId: "petstore-api",

    // Optional: this can be rotated automatically
    // realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjmTeWdgqIivVx6eFhupU25rri4jDlaQhZl3ECs7ZNg77NLKeph6RuvK0n9nDaDw2zR2j4z1BFCdZ3wCr8SnP96/U2iPeV5qrXOXXZ07uZ7O6RM2KxueLbFTdJXtbVAbwX2my97napLzJwQep9wgJxrf5R840/IsAJhTZa5+pQiE+XegZs9/uy8sviSkinvXMozaEw9VR7HXisEFOm8jECEi6OdnSyNkNfl1j0IcyjvNr9S/yihjeTf/F8JrjvnRDcgUKAvRcj22oF0bHbZYDL4JLD7PJPRJRVTZEBrHLJJG8dPAVUD0lyz8XhsMD1DcKRBMIquztH4SZKbLgOCQUlwIDAQAB'
});

