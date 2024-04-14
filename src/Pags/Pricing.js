
import Header from "./Header";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./templates/Footer";

function Pricing(){
    return(
        <div className="todas">
            <header>
                <Header/>            
            </header>
            <br></br>
            <br></br>
            <body className="corpo">
                <div className="container pricing">
                    <Card className="cardbody" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://st3.depositphotos.com/1000350/13658/i/450/depositphotos_136583168-stock-photo-cryptocurrency-bitcoin-close-up.jpg" />
                        <Card.Body >
                            <Card.Title>Bitcoin</Card.Title>
                            <Card.Text>
                            Valor da Unidade R$ 328607,07
                            </Card.Text>
                            <Button variant="danger"><Link className="custom-link-pricing" to='https://en.wikipedia.org/wiki/Bitcoin'>Saiba mais</Link></Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardbody" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://static.toiimg.com/thumb/msid-87889891,width-400,resizemode-4/87889891.jpg" />
                        <Card.Body>
                            <Card.Title>Ethereum</Card.Title>
                            <Card.Text>
                            Valor da Unidade R$ 15764,97
                            </Card.Text>
                            <Button variant="danger"><Link className="custom-link-pricing" to='https://en.wikipedia.org/wiki/Ethereum'>Saiba mais</Link></Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardbody" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://portaldobitcoin.uol.com.br/wp-content/uploads/sites/6/2024/03/moeda-solana-SOL.jpg?w=800&h=430&crop=1" />
                        <Card.Body>
                            <Card.Title>Solana</Card.Title>
                            <Card.Text>
                            Valor da Unidade R$ 729,39
                            </Card.Text>
                            <Button variant="danger"><Link className="custom-link-pricing" to='https://en.wikipedia.org/wiki/Solana_(blockchain_platform)'> Saiba mais</Link></Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardbody" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.empiricus.com.br/uploads/2023/06/chainlink.jpg" />
                        <Card.Body>
                            <Card.Title>ChainLink</Card.Title>
                            <Card.Text>
                            Valor da Unidade R$ 69,39
                            </Card.Text>
                            <Button variant="danger"><Link className="custom-link-pricing" to='https://en.wikipedia.org/wiki/Chainlink_(blockchain)'> Saiba mais</Link></Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardbody" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAYKmesS4eo6nsgKjPjkN4epyrufRhYyhWf3PzJGbmA&s" />
                        <Card.Body>
                            <Card.Title>Oasis Network</Card.Title>
                            <Card.Text>
                            Valor da Unidade R$ 0,46
                            </Card.Text>
                            <Button  variant="danger"><Link className="custom-link-pricing"  to='https://en.wikipedia.org/?title=Oasis_Network&redirect=no'> Saiba mais</Link></Button>
                        </Card.Body>
                    </Card>

                </div>
           
                
                            
            </body>
            <footer>
                <Footer/>
            </footer>   
        </div>
    )
}
export default Pricing