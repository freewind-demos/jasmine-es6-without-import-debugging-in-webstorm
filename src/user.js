module.exports =  class User {
  constructor(name) {
    this.name = name;
  }

  nameBang() {
    return this.name + '!!';
  }
}