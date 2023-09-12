import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from 'antd';


export default function Produto(){
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
        .then((dados) => {
            setProdutos(dados.data);
            })
    }, []);

    const adicionarAoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
        console.log(`Adicionando ${produto.title} ao carrinho.`);
    }

    return <>
            <div className="container">
                <div className="row">
                    {produtos.map((produto) => (
                        <div className="col-12 col-md-6 col-lg-3" key={produto.id}>
                            <Card
                            hoverable
                            style={{
                                width: "100%",
                                height: "100%",
                                marginBottom: "16px"
                                }}
                                cover={<img
                                    alt={produto.title}
                                    src={produto.image}
                                    className= "card-img-top"
                                    style={{
                                        width: "100%",
                                        height: "300px",
                                        objectFit: "scale-down"
                                    }}
                                    />}
                                >
                                    <h5 className="card-title">{produto.title}</h5>
                                    <p className="card-text">{produto.description.slice(0, 100)}...</p>
                                    <p className="card-text">${produto.price}</p>
                                    <p className="card-text">Categoria: {produto.category}</p>
                                    <div className="col-12 d-flex justify-content-between"> 
                                        <button type="button" className="btn btn-dark" onClick={() => adicionarAoCarrinho(produto)}>
                                            Comprar
                                        </button>
                                    </div>
                                </Card>
                            </div>
                        ))}
                </div>
            </div>
</>
}