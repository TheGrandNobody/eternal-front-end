import React from 'react';
import HEAD from 'next/head';
import Navbar from '../navbar';
import Footer from '../Footer/Footer';
import { useDispatch} from 'react-redux';
import { changeGageType } from '../../reducers/main';
import Tooltip from '../ToolTip/Tooltip';

function index() {
  const dispatch = useDispatch();
  return (
    <>
      <HEAD>
        <title>Gage Selection | Eternal</title>
      </HEAD>

      <body className='secondary'>
        <div className='header d-flex align-items-center'>
          <Navbar />

          <div className='container select-gage-container'>
            <div className='row m-0 position-relative text-center'>
              <h1 className='color-white bold mb-5'>Select a Gage</h1>
            </div>
            <div className='row m-0 position-relative select-gage'>
              <div className='col-sm-4 mb-4 mb-sm-0'>
                <div
                  onClick={() => {
                    dispatch(changeGageType({ gageType: 'Liquid' }));
                  }}>
                  <a className='text-center'>
                    <div className='gage-block d-flex align-items-center justify-content-center flex-column'>
                      <img src='img/standard-gage.svg' />
                    </div>
                    <div className='d-flex align-center justify-content-center mt-4'>
                      <h2 className='color-white'>Liquid Gage</h2>
                      <Tooltip
                        text={
                          'Provide liquidity at a 50% discount, instantly earn 10% of your original deposit and leave it be for long enough to win another 10%!'
                        }>
                      </Tooltip>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-sm-4 mb-4 mb-sm-0'>
                <a className='text-center'>
                  <div className='gage-block inactive d-flex align-items-center justify-content-center flex-column'>
                    <h2>Coming in</h2>
                    <h1>Q1</h1>
                  </div>
                  <div className='d-flex align-center justify-content-center mt-4'>
                    <h2 className='color-white'>Loyalty Gage</h2>
                    <Tooltip
                      text={
                        'A loyalty gage provides instantaneous profit to the investor, and long-term healthy investors to the firm. The conditions depend on what both parties have agreed upon.'
                      }>
                    </Tooltip>
                  </div>
                </a>
              </div>
              <div className='col-sm-4 mb-4 mb-sm-0'>
                <a className='text-center'>
                  <div className='gage-block inactive d-flex align-items-center justify-content-center flex-column'>
                    <h2>Coming in</h2>
                    <h1>Q2</h1>
                  </div>
                  <div className='d-flex align-center justify-content-center mt-4'>
                    <h2 className='color-white'>Yield Gage</h2>
                    <Tooltip
                      text={
                        'Contender for the highest earning potential of all DeFi! A yield gage is a liquid gage whose deposit is sent to a yield farming strategy.'
                      }>
                    </Tooltip>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script type='text/javascript' src='/js/mdb.min.js'></script>
        <script src='/js/autodrop.js'></script>
      </body>
    </>
  );
}

export default index;
