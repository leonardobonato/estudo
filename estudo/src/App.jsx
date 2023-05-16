import React, { useState, useRef } from "React";
import Conversando from './assets/pessoas-conversando.svg'
import Seta from './assets/setinha.svg'
import Lixo from './assets/lixeira.svg'


import { Container, H1, Imagem, ContainerItens, InputLabel, Input, Botao, User } from './estilo'

const App = () => {

  const inputNome = useRef()
  const inputIdade = useRef()
  const [usuarios, setUsuarios] = useState([])

  function adicionarUsuario() {
    setUsuarios([...usuarios, { id: Math.random(), nome: inputNome.current.value, idade: inputIdade.current.value }])
  }

function deletarUsuario(usuarioId){
  const novoUsuario = usuarios.filter(usuario => usuario.id !== usuarioId)
  
  setUsuarios(novoUsuario)
}

  return (
    <Container>
      <Imagem alt="pessoas-conversando" src={Conversando} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome:</InputLabel>
        <Input ref={inputNome} placeholder="Seu nome" />

        <InputLabel>Idade:</InputLabel>
        <Input ref={inputIdade} placeholder="Idade" />

        <Botao onClick={adicionarUsuario} >
          Cadastrar <img alt="seta" src={Seta} ></img>
        </Botao>

        <ul>
          {usuarios.map((usuario) => (  //quero mapear item por item da minha const usuarios depois retorno codigo html (ul e li) e entre esse código html eu uso js pra pegar o nome e a idade do meu usuario
            <User key={usuario.id}>
              <p>{usuario.nome}</p> <p>{usuario.idade}</p>
              <button onClick={() =>deletarUsuario(usuario.id)}><img src={Lixo} alt="lixeira" /></button>
            </User>
          ))
          }
        </ul>

      </ContainerItens>

    </Container>
  );
}

export default App
