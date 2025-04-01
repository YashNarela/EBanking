 async function GeneratePass() {
  let str = `0123456789`;

  let pass = "";

  for (let i = 0; i <= 3; i++) {
    let Idx = Math.floor(Math.random() * str.length);

    pass += str.charAt(Idx);
  }
  return pass;
}

module.exports = GeneratePass;
