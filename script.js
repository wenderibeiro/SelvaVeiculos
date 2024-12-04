function calculateRental() {
    const carType = document.getElementById('carType').value;
    const rentalDays = document.getElementById('rentalDays').value;
    let dailyRate;

    switch(carType) {
        case 'economico':
            dailyRate = 80;
            break;
        case 'luxo':
            dailyRate = 200;
            break;
        case 'suv':
            dailyRate = 150;
            break;
        default:
            dailyRate = 0;
    }

    const totalCost = dailyRate * rentalDays;
    document.getElementById('result').innerText = `Custo Total: R$ ${totalCost}`;
}

document.getElementById('retiradaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const local = document.getElementById('localRetirada').value;
    const data = document.getElementById('dataRetirada','dataDevolucao').value;
    const hora = document.getElementById('horaRetirada','horaDevolucao').value;
    
    
    const resultDiv = document.getElementById('resultRetirada');
    resultDiv.innerHTML = `Retirada agendada para o local: ${local}, na data: ${data}, às: ${hora}.`;
  });

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    alert(`Bem-vindo, ${email}! Você está logado.`);
  });

  document.getElementById('pagamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const carro = document.getElementById('carro').value;
    const dias = document.getElementById('dias').value;
    const formaPagamento = document.getElementById('formaPagamento').value;
    
    let valorTotal = dias * 100; // Valor base do aluguel diário
    
    let parcelamento = formaPagamento === "cartao" ? valorTotal / 12 : valorTotal;
    
    let resultDiv = document.getElementById('resultPagamento');
    resultDiv.innerHTML = `Você escolheu o carro: ${carro}, com ${dias} dias de locação. <br> Total a pagar: R$ ${valorTotal} <br> Parcela (12x sem juros): R$ ${parcelamento.toFixed(2)} por mês. Forma de pagamento: ${formaPagamento}`;
  });

  document.getElementById("form-dados").addEventListener("submit", function(event) {
    // Prevenir o envio do formulário para garantir que validamos primeiro
    event.preventDefault();

    const termo = document.getElementById('termo').checked;
    if (!termo) {
        alert("Você deve ler e concordar com o termo de proteção de dados.");
        return;
    }

    // Se tudo estiver ok, prosseguir para a página de pagamento
    window.location.href = "pagamento.html"; // Página de pagamento
});

document.getElementById('form-pagamento').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validar os dados de pagamento (simulação de validação)
    const cartaoNumero = document.getElementById('cartao-numero').value;
    const nomeTitular = document.getElementById('nome-titular').value;
    const dataVencimento = document.getElementById('data-vencimento').value;
    const codigoSeguranca = document.getElementById('codigo-seguranca').value;
    const enderecoCobrança = document.getElementById('endereco-cobranca').value;

    if (!cartaoNumero || !nomeTitular || !dataVencimento || !codigoSeguranca || !enderecoCobrança) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode integrar com uma API de pagamento real (ex: PayPal, Stripe)
    // Para este exemplo, vamos simular uma transação bem-sucedida

    const statusPagamento = document.getElementById('status-pagamento');
    statusPagamento.style.color = 'green';
    statusPagamento.textContent = "Pagamento realizado com sucesso!";

    // Redirecionar o usuário para uma página de confirmação ou agradecimento
    setTimeout(function() {
        window.location.href = "confirmacao.html"; // Página de confirmação após pagamento
    }, 3000);
});

document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter dados do formulário
    const dataRetirada = document.getElementById('data-retirada').value;
    const horaRetirada = document.getElementById('hora-retirada').value;
    const localRetirada = document.getElementById('local-retirada').value;
    const observacoes = document.getElementById('observacoes').value;

    // Validar se os campos principais estão preenchidos
    if (!dataRetirada || !horaRetirada || !localRetirada) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Simulação de um processo de agendamento bem-sucedido
    const statusAgendamento = document.getElementById('status-agendamento');
    statusAgendamento.style.color = 'green';
    statusAgendamento.textContent = `Retirada agendada com sucesso! \nData: ${dataRetirada} \nHora: ${horaRetirada} \nLocal: ${localRetirada}`;

    // Opcionalmente, você pode redirecionar o usuário para outra página após o agendamento
    setTimeout(function() {
        window.location.href = "confirmacao-agendamento.html"; // Página de confirmação após agendamento
    }, 3000);
});