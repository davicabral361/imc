function calcularIMC() {
    // Obtém o peso e a altura digitados pelo usuário
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    // Calcula o IMC
    var imc = peso / (altura * altura);

    // Arredonda o IMC para uma casa decimal
    imc = imc.toFixed(1);
    
    // Atualiza o conteúdo da tag p com o resultado do cálculo
    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc;
  }

function limparForm() {
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('resultado').innerHTML = "";
}  