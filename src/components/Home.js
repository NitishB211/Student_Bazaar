function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="novels-set" height={650} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Set of Books</h5>
              <p>Some interesting books to read</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1557231040-038eb8e8cdf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhZWRwaG9uZXN8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="headphone" height={650} />
            <div className="carousel-caption d-none d-md-block">
              <h5>High Quality headphone</h5>
              <p>Some interesting books to read</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="wooden table" height={650} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Lapto Charger</h5>
              <p> Lapto charger for charging laptop.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/14168781/pexels-photo-14168781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="apple smartphone" height={850} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Apple Smart Phone</h5>
              <p>High performance with latest Software Apple phone in working condition</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Home;