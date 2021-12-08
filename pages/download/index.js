import React from 'react';
import HEAD from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer/Footer';
function Download() {
  const handleOnClick = (id) => {
    window.open(`/api/${id}/download`);
  };
  return (
    <>
      <HEAD>
        <title>Eternal</title>
      </HEAD>

      <body className='secondary'>
        <div className='header d-flex align-items-center'>
          <Navbar />

          <div className='container select-gage-container'>
            <div className='row m-0 position-relative'>
              <h1 className='color-white bold mb-5'>Downloads</h1>
            </div>
            <div className='row m-0 position-relative select-gage'>
              <div className='col-sm-4 mb-4 mb-sm-0'>
                <div onClick={() => handleOnClick('gases_whitepaper')}>
                  <a className='text-center'>
                    <div className='gage-block d-flex align-items-center justify-content-center flex-column'>
                      <img src='img/pdf.svg' />
                      <h5 className='color-white bold mt-5'>
                        Whitepaper:
                        <br /> Introduction to Gages
                      </h5>
                    </div>
                  </a>
                </div>
              </div>

              <div className='col-sm-4 mb-4 mb-sm-0'>
                <div onClick={() => handleOnClick('eternal_whitepaper')}>
                  <a className='text-center'>
                    <div className='gage-block d-flex align-items-center justify-content-center flex-column'>
                      <img src='img/pdf.svg' />
                      <h5 className='color-white bold mt-5'>Whitepaper: Eternal</h5>
                    </div>
                  </a>
                </div>
              </div>

              <div className='col-sm-4 mb-4 mb-sm-0'>
                <div onClick={() => handleOnClick('eternal_litepaper')}>
                  <a className='text-center'>
                    <div className='gage-block d-flex align-items-center justify-content-center flex-column'>
                      <img src='img/pdf.svg' />
                      <h5 className='color-white bold mt-5'>Litepaper</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </body>
    </>
  );
}

export default Download;