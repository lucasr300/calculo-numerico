
var sassenfeld = function(sistema) {
    var out = []; 
    // sistema e um vetor que recebe os elementos do sistema
    // comeca a contar do 1 e nao do zero

    //Fatiando a variavel em tres linhas
    var linha1 = sistema.slice(1,3+1);
    var linha2 = sistema.slice(4,6+1);
    var linha3 = sistema.slice(7,9+1);
    
    //Temos que dividir o primeiro da primeira linha pelos outros dois
    //e assim vai
    out.push("Primeiro da primeira: " + linha1[0]);
    var divisao_da_primeira_linha = cn.arrd((linha1[1] + linha1[2]) / linha1[0]);
    out.push("Divisao: (" + linha1[1] + " + " + linha1[2] + ") / " + linha1[0] + " = " + divisao_da_primeira_linha); 

    out.push("Segundo da segunda: " + linha2[1]);
    var divisao_da_segunda_linha = cn.arrd((linha2[0] + linha2[2]) / linha2[1]);
    out.push("Divisao: (" + linha2[0] + " + " + linha2[2] + ") / " + linha2[1] + " = " + divisao_da_segunda_linha); 
    
    out.push("Terceiro da terceira: " + linha3[2]);
    var divisao_da_terceira_linha = cn.arrd((linha3[0] + linha3[1]) / linha3[2]);
    out.push("Divisao: (" + linha3[0] + " + " + linha3[1] + ") / " + linha3[2] + " = " + divisao_da_terceira_linha); 
    out.push(""); 
    
    //Verifica qual e o maior deles
    var maior = Math.max(divisao_da_primeira_linha,
                        divisao_da_segunda_linha,
                        divisao_da_terceira_linha);
    out.push("O maior deles e " + maior); 
    
    out.push("");               
    //Se o maior for menor que 1, converge
    if (maior < 1) {
        out.push(maior + " e menor que 1. Entao converge!");
    } else { //Senao, o sistema precisa ser massageado
        out.push(maior + " e maior que 1. Logo, o valores calculados nao convergem. Vamos massagear o sistema?!");
    }
    
    return out;
};



