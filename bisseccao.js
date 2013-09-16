
var bisseccao = function(funcao, intervalo_min, intervalo_max, precisao) {

    var ponto_medio = function(intervalo_min, intervalo_max) {
        return cn.arrd( (  cn.arrd(intervalo_min) + cn.arrd(intervalo_max) ) / 2.0);
    };

    
    /* Esse daqui foi o que Mazzolli passou em 15 minutos em uma aula
     * 
    
    var posicao_falsa = function(intervalo_min, intervalo_max) {
        var denomidador, numerador;
        numerador = (intervalo_min * funcao(intervalo_max)) / (intervalo_max * funcao(intervalo_min));
        denomidador = funcao(intervalo_max) / funcao(intervalo_min);
        return numerador / denomidador;
    };
    */

    // Algoritimo da bisseccao
    // Recebe como parametro o metodo a ser usado

    var bisseccao = function(metodo) {
        var diferenca, out, passo, resultado;
        passo = 0;
        out = [];
        while (true) {
            passo++;
            out.push("Iniciando iteracao k = " + passo);
            medio = metodo(intervalo_min, intervalo_max);
            resultado = cn.arrd(funcao(medio));
            
            out.push("O intervalo dessa iteracao (a,b) e [" + intervalo_min + " , " + intervalo_max+"]");
            out.push("O x (a-b)/2 a ser usado na funcao e " + medio);
            out.push("Aplicando o x na funcao (f(x)) = " + resultado);
            
            if (cn.e_positivo(resultado)) {
                out.push("Descartando A = " + intervalo_min + ", pois o f(x) e positivo");
                intervalo_min = medio;
                out.push("Agora o A passa a ter o valor de x. A = " + medio);
            } else {
                out.push("Descartando B = " + intervalo_max + ", pois o f(x) e negativo");
                intervalo_max = medio;
                out.push("Agora o B passa a ter o valor de x. B = " + medio);
            }
            
            out.push("Novo intervalo (a,b) a ser utilizado na próxima iteracao [" + intervalo_min + " , " + intervalo_max+"]");
            diferenca = cn.arrd(Math.abs(intervalo_max - intervalo_min));
            out.push("A diferenca entre os intervalos (b-a) e " + diferenca);
            
            if (diferenca < precisao) {
                out.push("");
                out.push("A diferenca (b-a) e menor que " + precisao + ", que foi a precisao pedida.");
                out.push("Por causa disso, o problema terminou");
                out.push("");
                out.push("A resposta e (a+b)/2 = " + metodo(intervalo_min, intervalo_max));
                break;
            } else {
                out.push("A diferenca ainda nao e menor que a precisao. Vamos continuar.");
            }
            out.push("");
        }
        return out;
    };
    
    return bisseccao(ponto_medio);
}