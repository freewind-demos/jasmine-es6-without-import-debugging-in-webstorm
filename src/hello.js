const User = require('./user');

module.exports = class Hello {
  greeting() {
    const user = new User('Freewind');
    return 'Hello, ' + user.nameBang();
  }
};