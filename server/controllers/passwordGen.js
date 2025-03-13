 async function GeneratePass() {
  let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'",.<>?/`;

  let pass = "";

  for (let i = 0; i <= 7; i++) {
    let Idx = Math.floor(Math.random() * str.length);

    pass += str.charAt(Idx);
  }
  return pass;
}

module.exports = GeneratePass;
