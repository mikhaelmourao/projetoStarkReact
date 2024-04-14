import { Link } from "react-router-dom"


function Header(){
    return(
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <a class="navbar-brand"><h3><b>Stark Industries</b></h3></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            
                            <a class="nav-link active" aria-current="page" href="#"><Link className="custom-link" to='/'>Home</Link></a>
                            <a class="nav-link" href="#"><Link className="custom-link" to='/conversoes'>Conversões</Link></a>
                            <a class="nav-link" href="#"><Link className="custom-link" to='/pricing'>Pricing</Link></a>
                        </div>
                    </div>
                </div>
            </nav>
            
        </div> 
        
    )
}
export default Header