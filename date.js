//Module is a implict object behide a node code
//console.log(module);

//The module has a propert exports with somthing allowed to use outside by require
exports.getDate = () => {
  const options = {
    weekday: "long",
    month: "long",
    day: 'numeric',
  }
  const date = new Date();
  return date.toLocaleDateString('en-US', options);
}
