
import React from 'react';
import logo from '../imagenes/logo1.png'
import './styles/Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='Home'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="360" height="70" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Carrito">
                  Carrito
                </a>
              </li>
              <li className="nav-item  d-none d-md-inline logout-button-container">
                <Link className="nav-link " to="/login">Cerrar Sesión</Link>
              </li>
              <li className="d-md-none">
                <Link className="nav-link" to="/login">Cerrar Sesión</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      
      <svg class="yellow-square" viewBox="0 0 200 655" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="32" width="1616" height="1616" rx="28" ry="28" fill="#ffc107" transform="rotate(-45 200 100)" />
      </svg>
    
      <div className="container Caja" >
      <div className="row">
      <h2 className='text-center'>Productos:</h2>

        <div className="col-md-4">
          <div className="card C1">
            <img
              src="https://www.dhresource.com/0x0/f2/albu/g10/M01/9C/39/rBVaVlwxchaAbj92AAHa-BrMYiw089.jpg" 
              className="card-img-top"
              alt="Perro 1"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Perro 1</h5>
              <a href="#" className="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="col-md-4">
          <div className="card C2">
            <img
              src="https://th.bing.com/th/id/OIP.NbCAK-cytXCjimhdo1ln2wAAAA?pid=ImgDet&rs=1" 
              className="card-img-top"
              alt="Perro 2"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Perro 2</h5>
              <a href="#" className="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>

     
        <div className="col-md-4">
          <div className="card C3">
            <img
              src="https://th.bing.com/th/id/OIP.neKxKVTsZZe0Onw3IcRuAwHaHa?pid=ImgDet&rs=1" 
              className="card-img-top"
              alt="Perro 3"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Perro 3</h5>
              <a href="#" className="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    
  );
}

export default Home;
