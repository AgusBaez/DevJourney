function capitalize(frase) {
  console.log("----- Capitalice -----");
  if (frase !== undefined) {
    let firtLtr = frase.substr(0, 1).toUpperCase(); //Primera letra del str
    let restLtr = frase.substring(1, frase.length);
    let resultado = firtLtr + restLtr;
    console.log(resultado);
    return resultado;
  } else {
    return "undefined";
  }
}
capitalize("fasdofkidkpa"); //output F + asdofkidkpa =
capitalize("hello stranger"); // output H + ello stranger =
