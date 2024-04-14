
import Header from "./Header";
import React, { useState } from "react";
import ListaCarrossel from "./templates/ListaCarrossel";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import Footer from "./templates/Footer";



function Conversoes(){

    const criptos = ['Bitcoin', 'Ethereum', 'Solana', 'Chainlink', 'Oasis Network']
    const [moeda, setMoeda] = useState('')
    const [valor, setValor] = useState('')
    const [resultado, SetResultado] = useState('');
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    function conversao(){

        let result;
        if (!moeda || !valor) {
            handleClose()
            alert('Preencha os campos de Criptomoeda e Valor')
            return
        }

        if(moeda === 'Bitcoin'){
            result = valor*0.0000030431481199940612;
        }
        else if(moeda === 'Ethereum'){
            result = valor*0.00006343175320849587 ;
        }
        else if(moeda === 'Solana'){
            result = valor*0.0013710097887326;
        }
        else if(moeda === 'Chainlink'){
            result = valor*0.014411378059128331;
        }
        else if(moeda === 'Oasis Network'){
            result = valor*2.1758292174349876;
        }
        SetResultado(result)
        
        handleShow()
    }

    return(
        <div className="todas">
            <header>

            <Header/>
            </header>
            <body className="corpo">
                
                
                <br></br>
                <ListaCarrossel/>
                <br></br>
                <br></br>
                <div className="container">
                    <form class="form-group" >
                        <label>ESCOLHA UMA CRIPTOMOEDA</label>
                        <select  class="form-control" aria-label="Default select example" onChange={(e) => setMoeda(e.target.value)}>
                            {criptos.map((cripto, index) => (
                                <React.Fragment>
                                    <option selected></option>
                                    <option key= {index}> {cripto} </option>                       
                                </React.Fragment>
                            ))}
                        </select>

                        <label>DIGITE UM VALOR EM R$</label><br></br>
                        <input class="form-control sm" type="number" onChange={(e) => setValor(e.target.value)}/>
                        <br></br>
                        <Button className="btn btn-danger" onClick={conversao}>
                        Converter
                        </Button>
                        
                        
                    </form>     

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Resultado</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><p>Valor da Conversão {resultado} - {moeda} </p></Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            
                            </Modal.Footer>
                        </Modal>
                    
                </div>
            </body>

            <footer>
                <Footer/>
            </footer>
               
        </div>
    )
}
export default Conversoes