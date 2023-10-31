import React from "react";
import imagem from "../../assets/carro.png";
import '../CardItem/style.css'

function Card({titulo="Carrinho", preco, onClickProps}){
    return (
        <div className="container-card">
            <img src={imagem}/>
            <div>{titulo}</div>
            <div>{preco}</div>
            <button onClick={onClickProps}>Comprar</button>
        </div>
    );
}

export default Card;