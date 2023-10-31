import logo from './logo.svg';
import './App.css';
import Card from './Componentes/CardItem';
import React from 'react';

function App() {
  const [estado, setEstado] = React.useState(0);
  const [mensagem, setMensagem] = React.useState("Seu carrinho está vazio");

  React.useEffect(() => {
    if(estado > 0){
      setMensagem("Tem coisa no seu carrinho: "+estado+" carros");
    }
  }, [estado]);

  const funcaoApp = () => {
    setEstado(estado+1);
  }

  return (
    <div className="App">
      <div>Quantidade de clicks: {estado}</div>
      <div>{mensagem}</div>
      <div>
        <Card onClickProps={funcaoApp} titulo={"Polo"} preco={"R$ 100000,00"}/>
        <Card onClickProps={funcaoApp} titulo={"Ferrari"} preco={"R$ 2000000,00"}/>
        <Card onClickProps={funcaoApp} titulo={"Camaro"} preco={"R$ 800000,00"}/>
        <Card onClickProps={funcaoApp} titulo={"Fusca"} preco={"R$ 200,00"}/>
        <Card onClickProps={funcaoApp} titulo={"Kwid"} preco={"R$ 50000,00"}/>
        <Card onClickProps={funcaoApp} titulo={"Bugatti"} preco={"R$ 20000,00"}/>
      </div>
    </div>
  );
}

export default App;
