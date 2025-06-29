document.getElementById('form-imc').addEventListener('submit', function (e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultado = document.getElementById('resultado');

  // toca som da galinha
  const audio = new Audio("sons/cacarejo.mp3");
  audio.play();

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultado.textContent = "⚠️ Por favor, preencha os campos corretamente.";
    resultado.style.color = "red";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 24.9) classificacao = "Peso normal";
  else if (imc < 29.9) classificacao = "Sobrepeso";
  else classificacao = "Obesidade";

  resultado.style.color = "green";
  resultado.textContent = `✅ Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
});
