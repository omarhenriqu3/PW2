'use client';

import { useState } from 'react';

export default function AddressForm() {
  const [dados, setDados] = useState({
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    estado: '',
    cidade: ''
  });

  const [mensagemErro, setMensagemErro] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados(prev => ({ ...prev, [name]: value }));
  };

  const aoEnviar = (e) => {
    e.preventDefault();

    const cepLimpo = dados.cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      setMensagemErro('O CEP informado é inválido.');
      return;
    }

    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then(response => response.json())
      .then(resultado => {
        if (resultado.erro) {
          setMensagemErro('O CEP informado é inválido.');
          setDados(prev => ({ ...prev, rua: '', bairro: '', estado: '', cidade: '' }));
        } else {
          setMensagemErro('');
          setDados(prev => ({
            ...prev,
            rua: resultado.logradouro,
            bairro: resultado.bairro,
            estado: resultado.uf,
            cidade: resultado.localidade
          }));
        }
      })
      .catch(() => {
        setMensagemErro('Erro ao consultar o serviço.');
      });
  };

  return (
    <form onSubmit={aoEnviar}>
      <h1>Address</h1>

      <div>
        <input 
          name="cep" 
          placeholder="CEP" 
          value={dados.cep} 
          onChange={handleChange} 
        />
        {mensagemErro && <p style={{ color: 'red' }}>{mensagemErro}</p>}
      </div>

      <input name="rua" placeholder="Rua" value={dados.rua} onChange={handleChange} />
      <input name="numero" placeholder="Número" value={dados.numero} onChange={handleChange} />
      <input name="bairro" placeholder="Bairro" value={dados.bairro} onChange={handleChange} />
      <input name="estado" placeholder="Estado" value={dados.estado} onChange={handleChange} />
      <input name="cidade" placeholder="Cidade" value={dados.cidade} onChange={handleChange} />

      <button type="submit">Enviar</button>
    </form>
  );
}
