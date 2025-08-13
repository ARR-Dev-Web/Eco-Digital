import React, { useRef, useEffect } from 'react';
import './HomePage.css';

const PaginaPrincipal = () => {
  const sliderRef = useRef(null);

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pagina-principal">
      <nav className="navbar">
        <button className="nav-button">Perfil</button>
        <button className="nav-button">Alertas</button>
        <button className="nav-button">Mis Compras</button>
        <button className="nav-button">Guardado</button>
        <button className="nav-button">Mis Cupones</button>
        <button className="nav-button">Historial</button>
        <button className="nav-button">Configuración</button>
        <button className="nav-button">Vender</button>
      </nav>

      <div className="container-principal">
        <div className="img-banner"></div>
      </div>

      <div className="icons-principal">
        <div className="card">
          <div className="square square-explorar"></div>
          <br />
          <input type="text" placeholder="Explorar" />
        </div>

        <div className="card">
          <div className="square square-favoritos"></div>
          <br />
          <h3>Favoritos</h3>
        </div>

        <div className="card">
          <div className="square square-ofertas"></div>
          <br />
          <h3>Ofertas</h3>
        </div>
      </div>

      <div className="product-principal">
        <div className="cart-product">
          <div className="img img-smart-tv"></div>
          <h3>Smart TV 32 Philips</h3>
        </div>
        <div className="cart-product">
          <div className="img img-samsung-galaxy"></div>
          <h3>Samsung Galaxy Tab</h3>
        </div>
        <div className="cart-product">
          <div className="img img-iphone"></div>
          <h3>Iphone</h3>
        </div>
      </div>

      <div className="container-testimonials">
        <div className="article-subtitle">
          <div className="subtitle">
            <h2>¡Explorá las mejores ofertas en tecnología!</h2>
          </div>
        </div>

        <div className="cards-testimonials">
          <div className="slider" ref={sliderRef}>
            <div className="article-testimonial">
              <div className='testimonial'>
                <div className='perfil'></div>
                <div className="name">Pablo</div>
                <div className="icon-star"></div>
              </div>
              <div className='opinion'>
                <p>¡Muy bueno! Es todo lo que esperaba, además llegó muy rápido.</p>
              </div>
            </div>

            <div className="article-testimonial">
              <div className='testimonial'>
                <div className='perfil'></div>
                <div className="name">María</div>
                <div className="icon-star"></div>
              </div>
              <div className='opinion'>
                <p>Todo de muy buena calidad, la verdad que me encantó.</p>
              </div>
            </div>

            <div className="article-testimonial">
              <div className='testimonial'>
                <div className='perfil'></div>
                <div className="name">Oscar</div>
                <div className="icon-star"></div>
              </div>
              <div className='opinion'>
                <p>¡Muy bueno! Es todo lo que esperaba, además llegó muy rápido.</p>
              </div>
            </div>
          </div>
          <button className="prev-btn" onClick={handlePrevSlide}>&#10094;</button>
          <button className="next-btn" onClick={handleNextSlide}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default PaginaPrincipal;
