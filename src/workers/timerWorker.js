self.onmessage = function (event) {
  console.log('WORKER recebeu:', event.data);

  switch (event.data) {
    case 'FAVOR': {
      self.postMessage('Sim posso ajudar!');
      break;
    }
    case 'FAla_OI': {
      self.postMessage('Ok: Oi');
      break;
    }
    case 'FECHAR': {
      self.postMessage('tá bom, fechando...');
      self.close();
      break;
    }
    default:
      self.postMessage('Não entendi a mensagem: ');
  }
};
