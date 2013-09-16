//Esses do lado de fora servem pros dois


//Aqui entra o famoso eval, a funcao que ta ajudando a gente a fazer os calculos
var calcular = function(out, funcao, x, y, z) {
    //Esse 'out' e so pra imprimir, 
    //como se fosse o System.out
    //nao faz parte do calculo  
    var funcao_original = funcao;
    funcao = funcao.replace('x',x);
    funcao = funcao.replace('y',y);
    funcao = funcao.replace('z',z);
    //Tratando numeros negativos
    funcao = funcao.replace('--','-');
    calculo = cn.arrd(eval(funcao));
    out.push("A funcao " + funcao_original + " ficou " + funcao + " e deu " + calculo);
    return calculo;
}

//O resultado ja vem preenchido com o chute inicial
var resultado = {x: 0, y: 0, z: 0};



// O mais burrinho

var gauss_jacob = function(funcao1, funcao2, funcao3, num_iteracoes) {

    var out = [];

	out.push("A primeira iteracao vai usar o chute inicial [0,0,0]");
	out.push("");
	
	var iteracao = 0;
	while (iteracao != num_iteracoes) {
	    iteracao++;
	    out.push("Iteracao k = " + iteracao);
	    //Estamos pegando cada funcao, calculando ela usando o resultado obtido ate agora
	    //No caso da primeira iteracao, ele vai usar o chute inicial
	    var x_dessa_iteracao = calcular(out, funcao1, resultado.x, resultado.y, resultado.z);
	    var y_dessa_iteracao = calcular(out, funcao2, resultado.x, resultado.y, resultado.z);
	    var z_dessa_iteracao = calcular(out, funcao3, resultado.x, resultado.y, resultado.z);
	    
	    resultado = {x: x_dessa_iteracao, y: y_dessa_iteracao, z: z_dessa_iteracao };
	    out.push("Valores para a proxima iteracao:");
	    out.push("[" + resultado.x + " , " + resultado.y + " , " + resultado.z + "]");
        out.push("");
    }
    
    return  out;
}



// O mais malandrinho
var gauss_seidel = function(funcao1, funcao2, funcao3, num_iteracoes) {

    var out = [];

	out.push("A primeira iteracao vai usar o chute inicial [0,0,0]");
	out.push("");
	
	var iteracao = 0;
	while (iteracao != num_iteracoes) {
	    iteracao++;
	    out.push("Iteracao k = " + iteracao);
	    //Estamos pegando cada funcao, calculando ela usando o resultado obtido ate agora
	    //No caso da primeira iteracao, ele vai usar o chute inicial
	    resultado.x = calcular(out, funcao1, resultado.x, resultado.y, resultado.z);
	    out.push("Retroalimentando: No proximo calculo, X ja e " + resultado.x);
	    out.push("");
	    resultado.y = calcular(out, funcao2, resultado.x, resultado.y, resultado.z);
	    out.push("Retroalimentando: No proximo calculo, Y ja e " + resultado.y);
	    out.push("");
	    resultado.z = calcular(out, funcao3, resultado.x, resultado.y, resultado.z);
	    out.push("Retroalimentando: No proximo calculo, Z ja e " + resultado.z);
	    out.push("");
        out.push("[" + resultado.x + " , " + resultado.y + " , " + resultado.z + "]");
	    //Agora estamos atribuindo na variavel resultado, o resultado do calculo de cada funcao
	    //Depois vamos usar essa variavel para retroalimentar e fazer o calculo novamente
	    
        out.push("");
    }
    
    return  out;
}
