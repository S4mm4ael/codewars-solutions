//There's no such thing as private properties on a coffeescript object! But, maybe there are?

//Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

//getSecret() which returns the secret
//setSecret() which sets the secret

function createSecretHolder(secret) {
  return {
    setSecret: (setted) => secret = setted,
    getSecret: () => secret,
  }
}
