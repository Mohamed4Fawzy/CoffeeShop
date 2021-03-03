/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'coffeeshopu.eu', // the auth0 domain prefix
    audience: 'CoffeeShop', // the audience set for the auth0 app
    clientId: '7UmEJUgt2OOJsJmAPBUDDg6ItSBtsec9', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8080/callback' // the base url of the running ionic application.
  }
}
