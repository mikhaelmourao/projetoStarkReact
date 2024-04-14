
import Header from "./Header";
import Footer from "./templates/Footer";
import ListaCarrossel from "./templates/ListaCarrossel";


function Home(){
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
                    <p >
                    Bem-vindo ao site oficial da Stark Industries, onde a inovação encontra 
                a tecnologia de ponta. Aqui, oferecemos uma plataforma robusta para realizar
                 conversões em criptomoedas de forma rápida e segura. Com nossa interface intuitiva 
                 e recursos avançados, você pode explorar o emocionante mundo das criptomoedas com facilidade.
                  Conte com a expertise da Stark Industries para converter entre uma variedade de criptomoedas populares
                   e moedas fiduciárias tradicionais. Esteja você negociando Bitcoin, Ethereum, Solana, ChainLink e Oasis Network, estamos aqui
                    para simplificar o processo. Junte-se a nós hoje e comece sua jornada no universo das criptomoedas com confiança
                     e conveniência

                    </p>
               
                </div>
    
              

            </body>

            <footer>
               
              <Footer/>
            </footer>
        </div>
    )
}
export default Home