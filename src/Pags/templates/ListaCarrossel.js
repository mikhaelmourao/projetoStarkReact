import { Carousel } from "react-bootstrap"

function ListaCarrossel(){
    return(
        <div className="todas">
                <h1>Nossas Moedas</h1>
            <Carousel>
                <Carousel.Item>
                    <h3>Bitcon</h3>
                    <img src="https://st3.depositphotos.com/1000350/13658/i/450/depositphotos_136583168-stock-photo-cryptocurrency-bitcoin-close-up.jpg" className="d-block w-100" alt="Bitcoin" />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Ethereum</h3>
                    <img src="https://static.toiimg.com/thumb/msid-87889891,width-400,resizemode-4/87889891.jpg" className="d-block w-100" alt="Ethereum" />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Solana</h3>
                    <img src="https://portaldobitcoin.uol.com.br/wp-content/uploads/sites/6/2024/03/moeda-solana-SOL.jpg?w=800&h=430&crop=1" className="d-block w-100" alt="Solana" />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>ChainLink</h3>
                    <img src="https://www.empiricus.com.br/uploads/2023/06/chainlink.jpg" className="d-block w-100" alt="ChainLink" />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Oasis Network</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAYKmesS4eo6nsgKjPjkN4epyrufRhYyhWf3PzJGbmA&s" className="d-block w-100" alt="Oasis NEtwork" />
                </Carousel.Item>
            </Carousel>   
        </div>
    )
}
 export default ListaCarrossel