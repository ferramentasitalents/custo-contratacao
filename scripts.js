<script>
function calculateCost() {
  const gastoRS = parseFloat(document.getElementById("gasto-rs").value);
  const gastoHunting = parseFloat(document.getElementById("gasto-hunting").value);
  const numVagas = parseFloat(document.getElementById("num-vagas").value);
  const cost = ((gastoRS + gastoHunting) / numVagas).toFixed(2);
  document.getElementById("result").innerHTML = `Custo de contratação por vaga: R$ ${cost}`;
}
</script>
