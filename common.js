
cn = {};

cn.e_negativo = function(x) {
  return x < 0;
};

cn.e_positivo = function(x) {
  return !cn.e_negativo(x);
}


cn.arrd = function(x) {
    return Math.ceil(x*10000)/10000;
};
