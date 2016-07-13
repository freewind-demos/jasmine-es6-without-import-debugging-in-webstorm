module.exports =  class User {
  constructor(name) {
    this.name = name;
  }

  nameBang() {
    const bang = this.name + '!!';
    return bang;
  }
}