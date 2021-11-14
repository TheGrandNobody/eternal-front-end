import React from 'react';
import HEAD from 'next/head';
import Navbar from '../../components/navbar';
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
                <div className='text-center' onClick={() => handleOnClick('gases_whitepaper')}>
                  <div className='gage-block d-flex align-items-center justify-content-center flex-column'>
                    <img src='img/pdf.svg' />
                    <h5 className='color-white bold mt-5'>
                      Whitepaper:
                      <br /> Introduction to Gages
                    </h5>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 mb-4 mb-sm-0' onClick={() => handleOnClick('eternal_whitepaper')}>
                <div className='text-center'>
                  <div className='gage-block d-flex align-items-center justify-content-center flex-column'>
                    <img src='img/pdf.svg' />
                    <h5 className='color-white bold mt-5'>Whitepaper: Eternal</h5>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 mb-4 mb-sm-0' onClick={() => handleOnClick('eternal_litepaper')}>
                <div className='text-center'>
                  <div className='gage-block d-flex align-items-center justify-content-center flex-column'>
                    <img src='img/pdf.svg' />
                    <h5 className='color-white bold mt-5'>Litepaper</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className='container d-flex align-items-center justify-content-center py-5 flex-column'>
            <a href='' className='mt-5'>
              <img src='img/footer-logo.svg' />
            </a>
            <ul className='navbar-nav m-auto d-flex mt-5 mb-0 flex-row'>
              <li className='nav-item mx-sm-4 mx-2'>
                <a className='nav-link' href='#'>
                  Earn
                </a>
              </li>
              <li className='nav-item mx-sm-4 mx-2'>
                <a className='nav-link disabled' href='#'>
                  Governance
                </a>
              </li>
              <li className='nav-item dropdown mx-sm-4 mx-2'>
                <a
                  className='nav-link dropdown-toggle'
                  href='javascript:void()'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-mdb-toggle='dropdown'
                  aria-expanded='false'>
                  Social
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                  <li>
                    <a className='dropdown-item' href='https://twitter.com/_eternalfinance'>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='https://www.reddit.com/r/Eternal_Finance/'>
                      Reddit
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='https://t.me/eternalfinance'>
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='https://medium.com/@eternal.finance'>
                      Medium
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown mx-sm-4 mx-2'>
                <a
                  className='nav-link dropdown-toggle active'
                  href='javascript:void();'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-mdb-toggle='dropdown'
                  aria-expanded='false'>
                  Info
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='https://docs.eternal.market'>
                      Documentation
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <p className='color-white text-center mt-3 mb-5'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
              accusantium doloremque laudantium, totam rem aperiam, eaque <br />
              ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <br />
              dicta sunt explicabo.
            </p>
          </div>

          <div className='row m-0 position-relative px-5 py-4'>
            <div className='d-flex footer-bottom'>
              <div className='me-sm-auto mb-3 mb-sm-0'>
                <p className='color-white mb-0'>Copyright © Eternal Finance B.V 2021. All rights reserved.</p>
              </div>
              <div className='ms-sm-auto'>
                <a href='' className='ms-3'>
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='16' cy='16' r='16' fill='#C35C6C' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8.65043 15.2594C8.74205 14.9566 8.96255 14.8043 9.24873 14.6943C13.6173 13.0141 17.9847 11.331 22.3484 9.63832C22.8409 9.4473 23.2859 9.61014 23.4146 10.1265C23.4146 10.2034 23.4146 10.2803 23.4146 10.3571C23.3277 10.7544 23.2374 11.151 23.1545 11.5491C22.6018 14.2029 22.0506 16.8569 21.499 19.511C21.339 20.2813 21.1779 21.0514 21.0196 21.8221C20.9305 22.2557 20.6581 22.5062 20.2736 22.462C20.1298 22.4455 19.9786 22.3728 19.8586 22.2868C18.8243 21.5452 17.7964 20.7948 16.7666 20.0469C16.5188 19.867 16.4658 19.869 16.2276 20.0632C15.6729 20.5155 15.1195 20.9695 14.5623 21.4186C14.2118 21.7012 13.7781 21.6555 13.5407 21.31C13.4797 21.2212 13.4417 21.1131 13.4091 21.0089C13.0249 19.7824 12.6426 18.5553 12.2641 17.327C12.2356 17.2342 12.1911 17.1866 12.1004 17.1531C11.1511 16.8026 10.2057 16.4417 9.25439 16.0966C8.95978 15.9897 8.73639 15.8322 8.65039 15.5188C8.65043 15.4324 8.65043 15.3459 8.65043 15.2594ZM22.8153 10.2851C22.8257 10.1361 22.7755 10.1108 22.6175 10.1717C18.2093 11.8718 13.8011 13.572 9.39387 15.2748C9.33743 15.2966 9.29371 15.3513 9.24404 15.3906C9.29551 15.4331 9.34038 15.4929 9.39949 15.5152C10.4182 15.8997 11.4375 16.2824 12.4596 16.6578C12.6293 16.7201 12.7244 16.8188 12.7777 16.9922C13.1732 18.2807 13.5761 19.5669 13.977 20.8536C14.0375 21.0476 14.074 21.0591 14.2291 20.9329C14.7804 20.4839 15.3308 20.0338 15.8823 19.585C16.2988 19.2461 16.6513 19.2369 17.0843 19.5512C18.1222 20.3045 19.16 21.0579 20.1981 21.8109C20.3543 21.9242 20.4003 21.9081 20.4381 21.7259C20.6238 20.8333 20.8079 19.9404 20.9934 19.0479C21.5168 16.5298 22.0405 14.0119 22.5641 11.4939C22.6491 11.0852 22.734 10.6765 22.8153 10.2851Z'
                      fill='white'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M13.2591 16.6896C13.2686 16.3072 13.4278 16.0441 13.7229 15.8611C14.0858 15.6359 14.45 15.4128 14.8137 15.1888C16.4319 14.1924 18.0502 13.1961 19.6681 12.1992C19.8068 12.1138 19.9458 12.0478 20.1138 12.1164C20.3542 12.2144 20.4417 12.5041 20.2884 12.7128C20.2518 12.7627 20.2067 12.8072 20.1613 12.8495C18.5717 14.3282 16.9855 15.8105 15.3881 17.2807C15.1301 17.5181 14.9936 17.7825 14.963 18.1263C14.9325 18.47 14.8834 18.8132 14.8214 19.1527C14.7612 19.4824 14.4174 19.6413 14.1541 19.4607C14.0596 19.3959 13.9755 19.278 13.9425 19.1676C13.7185 18.419 13.5085 17.6661 13.2968 16.9138C13.2736 16.8315 13.268 16.7443 13.2591 16.6896ZM14.3088 18.3273C14.3207 18.327 14.3326 18.3266 14.3445 18.3262C14.3595 18.2189 14.3792 18.112 14.3888 18.0042C14.4258 17.5918 14.5742 17.237 14.885 16.9498C16.0039 15.916 17.1181 14.8771 18.2341 13.84C18.266 13.8104 18.2971 13.7797 18.3286 13.7496C18.2678 13.7562 18.2229 13.7809 18.1794 13.8077C17.2594 14.374 16.3395 14.9405 15.4196 15.507C14.9658 15.7865 14.5116 16.0655 14.0585 16.346C13.8787 16.4574 13.8165 16.5673 13.8622 16.7355C14.0068 17.2673 14.1593 17.7969 14.3088 18.3273Z'
                      fill='white'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M19.6605 20.5832C19.7177 20.3167 19.7835 20.0074 19.8505 19.6983C20.0008 19.005 20.1514 18.3117 20.3027 17.6187C20.3159 17.558 20.3303 17.4968 20.3531 17.4394C20.408 17.3009 20.538 17.2275 20.6726 17.2528C20.8138 17.2794 20.9252 17.4028 20.9039 17.5531C20.8699 17.7944 20.8138 18.0329 20.7623 18.2716C20.5914 19.0635 20.4184 19.8549 20.246 20.6464C20.2389 20.679 20.2315 20.712 20.2198 20.7432C20.1641 20.8911 20.038 20.9672 19.8939 20.9416C19.7467 20.9154 19.6536 20.791 19.6605 20.5832Z'
                      fill='white'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M21.1988 16.2631C21.1862 16.3119 21.1701 16.4122 21.1344 16.5049C21.0823 16.64 20.9445 16.7048 20.8064 16.6737C20.6741 16.6439 20.5804 16.5345 20.5873 16.3934C20.5922 16.2944 20.611 16.1933 20.6417 16.099C20.6901 15.9501 20.8271 15.8721 20.9655 15.8981C21.1132 15.9259 21.2053 16.0491 21.1988 16.2631Z'
                      fill='white'
                    />
                  </svg>
                </a>
                <a href='' className='ms-3'>
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='15.9999' cy='16.0001' r='16' fill='#C35C6C' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M24.1317 11.7511C23.9724 12.0548 23.8302 12.3693 23.6486 12.6589C23.4799 12.9277 23.2323 13.1307 22.9528 13.2844C22.8565 13.3373 22.8195 13.3964 22.8189 13.5084C22.8104 15.0079 22.4943 16.4397 21.8277 17.7846C20.8427 19.772 19.3672 21.2583 17.3047 22.1241C16.2942 22.5483 15.2363 22.7288 14.1404 22.7087C13.2715 22.6928 12.4051 22.6483 11.5465 22.5103C10.7084 22.3757 9.88048 22.198 9.1212 21.7952C8.89475 21.6751 8.66277 21.5566 8.52423 21.3229C8.52423 21.2619 8.52423 21.201 8.52423 21.1399C8.60481 20.9438 8.75076 20.8608 8.9629 20.8548C9.7116 20.8335 10.4526 20.7476 11.1616 20.4931C11.5118 20.3673 11.8487 20.2044 12.1917 20.0583C12.1873 20.04 12.1828 20.0217 12.1784 20.0034C12.0652 19.9833 11.9518 19.9646 11.839 19.9428C10.5985 19.7039 9.77853 18.9783 9.35242 17.7956C9.3027 17.6577 9.31289 17.5364 9.4264 17.4351C9.53148 17.3413 9.7026 17.3205 9.83904 17.4039C10.0909 17.5578 10.3623 17.6472 10.6535 17.6793C10.7739 17.6926 10.8954 17.6961 11.0321 17.6745C10.9948 17.6483 10.9582 17.6211 10.9202 17.5959C10.0764 17.036 9.41842 16.3129 8.99197 15.3893C8.9178 15.2287 8.85988 15.0601 8.80177 14.8926C8.75285 14.7517 8.77361 14.6195 8.89429 14.5204C9.00345 14.4307 9.15428 14.4296 9.28889 14.5321C9.57215 14.7477 9.88128 14.9025 10.2312 14.9726C10.2601 14.9783 10.2898 14.98 10.348 14.9871C9.05878 13.5681 8.7899 12.0409 9.77643 10.3361C10.8806 11.5588 12.145 12.5374 13.7156 13.0713C14.4361 13.3161 15.1713 13.5001 15.9022 13.6409C15.9527 13.3061 15.979 12.9759 16.0547 12.6574C16.3886 11.2517 17.5503 10.2094 18.9754 10.0199C19.5545 9.94292 20.0929 10.0986 20.6149 10.3249C20.8937 10.4458 21.1619 10.5912 21.4395 10.7152C21.5048 10.7444 21.5988 10.7581 21.6628 10.734C22.2367 10.5181 22.8069 10.2921 23.3781 10.069C23.4206 10.0524 23.4644 10.0167 23.5045 10.0207C23.6047 10.0308 23.7177 10.0352 23.7986 10.0854C23.8958 10.1458 23.9129 10.2676 23.8588 10.373C23.6954 10.6922 23.5261 11.0085 23.3552 11.3237C23.3225 11.3841 23.272 11.4348 23.2017 11.5266C23.3722 11.4691 23.5001 11.426 23.6279 11.3827C23.8804 11.2971 23.999 11.3407 24.1318 11.5683C24.1317 11.6292 24.1317 11.6901 24.1317 11.7511ZM9.94401 11.2609C9.74949 11.6774 9.67334 12.2419 9.73183 12.6694C9.84167 13.4726 10.2471 14.1177 10.8273 14.6541C11.1391 14.9423 11.4947 15.183 11.8304 15.4453C11.8694 15.4757 11.9081 15.5065 11.9736 15.5584C11.1302 15.5624 10.3269 15.6032 9.55475 15.3004C10.1613 16.4572 11.0754 17.2548 12.3051 17.6865C12.2824 17.8404 12.2669 17.9818 12.2376 18.1203C12.2302 18.1554 12.179 18.207 12.1472 18.2074C11.6403 18.2149 11.1331 18.2234 10.6264 18.2131C10.4473 18.2096 10.2692 18.1565 10.0784 18.1239C10.094 18.1596 10.1022 18.1881 10.1175 18.2121C10.1748 18.3019 10.2306 18.393 10.2938 18.4786C10.6965 19.0237 11.2582 19.3145 11.9077 19.4244C12.3207 19.4942 12.7447 19.5028 13.1643 19.5291C13.3635 19.5415 13.5642 19.5312 13.7734 19.5312C12.5371 20.6091 11.1443 21.2781 9.49317 21.379C9.92195 21.5487 10.3452 21.7039 10.7804 21.8096C12.0164 22.1095 13.2764 22.1952 14.5444 22.1756C15.4425 22.1618 16.3088 21.9755 17.1331 21.6228C19.2114 20.7336 20.6399 19.196 21.5388 17.146C22.096 15.8752 22.3166 14.536 22.2945 13.1537C22.2926 13.0365 22.3193 12.9781 22.4405 12.9363C22.8894 12.7813 23.1841 12.4536 23.424 12.016C23.3424 12.0421 23.2954 12.0566 23.2488 12.0721C22.9697 12.1648 22.6916 12.2609 22.4112 12.3492C22.282 12.3899 22.1577 12.3815 22.0758 12.25C22.0015 12.1306 22.0184 11.9809 22.1182 11.8709C22.1454 11.841 22.1778 11.8158 22.207 11.7876C22.3569 11.6432 22.5163 11.5073 22.6537 11.3519C22.8114 11.1735 22.9496 10.9777 23.0962 10.7894C22.6553 10.9179 22.2406 11.0657 21.8318 11.2284C21.5947 11.3227 21.3809 11.2973 21.1615 11.179C20.9296 11.0539 20.6923 10.9378 20.4524 10.8288C20.1332 10.6836 19.8062 10.5514 19.451 10.5351C18.1428 10.4749 16.8987 11.4349 16.5715 12.7373C16.461 13.1774 16.4681 13.6224 16.4671 14.0688C16.4669 14.137 16.4671 14.2052 16.4671 14.2802C13.9944 13.893 11.7116 13.1519 9.94401 11.2609Z'
                      fill='white'
                    />
                  </svg>
                </a>
                <a href='' className='ms-3'>
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='16' cy='16.0001' r='16' fill='#C35C6C' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M24.213 16.3028C24.098 16.5785 24.0173 16.8763 23.8574 17.1228C23.7223 17.331 23.5001 17.4852 23.3058 17.651C23.2394 17.7078 23.206 17.7457 23.219 17.8407C23.3451 18.7535 23.1187 19.5845 22.6084 20.3414C21.9087 21.3791 20.9246 22.0653 19.797 22.5549C18.0683 23.3052 16.258 23.523 14.3904 23.3363C13.1183 23.2094 11.9039 22.883 10.7737 22.2798C9.72184 21.7184 8.82764 20.9803 8.27384 19.8958C7.9363 19.2349 7.80909 18.5344 7.92534 17.7946C7.93301 17.7462 7.90977 17.6663 7.87336 17.6418C7.4029 17.3226 7.12151 16.8846 7.02149 16.3271C7.01996 16.3181 7.00746 16.3109 7 16.303C7 16.1348 7 15.9668 7 15.7988C7.02544 15.7027 7.04913 15.606 7.07632 15.5103C7.44194 14.231 8.98622 13.7215 10.0396 14.5376C10.155 14.6271 10.2322 14.6346 10.3585 14.5569C11.5574 13.82 12.8714 13.4261 14.2628 13.2741C14.574 13.2401 14.8874 13.216 15.2002 13.2083C15.3691 13.2041 15.4506 13.1552 15.5033 12.9833C15.8533 11.845 16.2165 10.7106 16.5758 9.57492C16.6743 9.26304 16.7545 9.21742 17.0664 9.29133C18.0299 9.51943 18.9932 9.74687 19.9567 9.9741C19.978 9.97914 20.0003 9.97936 19.9828 9.97739C20.1701 9.75499 20.3175 9.52535 20.516 9.35494C21.0233 8.91892 21.7194 8.88865 22.3156 9.24264C22.8314 9.54882 23.1192 10.1961 23.0172 10.82C22.9148 11.4449 22.4112 11.9608 21.7815 12.0853C20.8869 12.2628 20.005 11.5967 19.9449 10.6913C19.9361 10.5575 19.8946 10.5025 19.7584 10.4715C18.8642 10.2682 17.9727 10.0537 17.0526 9.83614C16.6986 10.9547 16.3459 12.0691 15.9937 13.1826C16.4668 13.2359 16.9188 13.2701 17.3654 13.3401C18.6043 13.534 19.7784 13.9187 20.8452 14.5927C20.9619 14.6664 21.031 14.653 21.1345 14.5692C22.2596 13.6594 23.9239 14.2832 24.1809 15.7064C24.1866 15.738 24.202 15.7678 24.2127 15.7985C24.213 15.9663 24.213 16.1345 24.213 16.3028ZM15.2877 13.718C14.2073 13.716 12.9082 13.9551 11.6315 14.4856C10.6141 14.9081 9.72425 15.5099 9.05552 16.4113C8.21989 17.5378 8.21484 19.0351 9.04499 20.1664C9.59507 20.9163 10.3099 21.4589 11.1277 21.8754C12.3024 22.474 13.5616 22.7689 14.8692 22.8475C16.4648 22.9431 18.0214 22.7387 19.5031 22.1123C20.5228 21.6813 21.4214 21.083 22.091 20.1743C22.9286 19.0371 22.9251 17.5398 22.0813 16.4052C21.5339 15.6689 20.8294 15.1313 20.0205 14.7212C18.6241 14.0132 17.1285 13.7369 15.2877 13.718ZM22.5057 10.5586C22.5068 9.99121 22.0504 9.53479 21.4837 9.53676C20.9237 9.53895 20.4732 9.98485 20.4634 10.5465C20.4535 11.1043 20.9141 11.5717 21.4802 11.5785C22.041 11.5855 22.5044 11.1247 22.5057 10.5586ZM21.4418 15.0063C22.1763 15.5908 22.7485 16.2854 23.0674 17.17C23.7324 16.725 23.8719 15.8181 23.3872 15.2072C22.8996 14.5931 21.9881 14.4911 21.4418 15.0063ZM9.74465 14.9695C9.3117 14.6495 8.8566 14.5832 8.38483 14.7811C7.8659 14.9986 7.57902 15.4094 7.54217 15.9738C7.51125 16.4477 7.70557 16.8259 8.08851 17.1388C8.42145 16.2365 9.00903 15.554 9.74465 14.9695Z'
                      fill='white'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M11.8652 17.3535C11.8632 16.7304 12.3668 16.2233 12.9912 16.2191C13.6086 16.215 14.1245 16.7273 14.1269 17.3474C14.1293 17.9643 13.6152 18.4822 12.9978 18.485C12.3804 18.4879 11.8672 17.9751 11.8652 17.3535Z'
                      fill='white'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M19.3516 17.3884C19.315 18.0234 18.7882 18.5175 18.185 18.4831C17.5542 18.4471 17.0562 17.9141 17.0908 17.3123C17.1272 16.6778 17.6547 16.1865 18.2616 16.222C18.9 16.2593 19.3867 16.78 19.3516 17.3884Z'
                      fill='white'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M15.5376 21.5585C14.9708 21.5566 14.3291 21.5219 13.7354 21.2611C13.4333 21.1286 13.1592 20.9258 12.8868 20.7339C12.7455 20.6345 12.7466 20.4641 12.8493 20.3498C12.9464 20.2417 13.1026 20.2237 13.225 20.336C13.6941 20.7679 14.2685 20.9308 14.88 20.9898C15.5738 21.0567 16.2664 21.0539 16.9492 20.8802C17.3178 20.7861 17.6521 20.6292 17.9414 20.3761C18.0072 20.3187 18.1138 20.2641 18.1912 20.2761C18.2739 20.2891 18.3877 20.37 18.4077 20.4433C18.4305 20.5262 18.3932 20.6604 18.332 20.7255C18.0949 20.9775 17.7973 21.1462 17.4755 21.2706C16.8757 21.5028 16.2475 21.5568 15.5376 21.5585Z'
                      fill='white'
                    />
                  </svg>
                </a>
                <a href='' className='ms-3'>
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='15.9999' cy='16' r='16' fill='#C35C6C' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M16.1078 17.4486C16.7337 15.8508 17.342 14.2976 17.9507 12.7445C18.255 11.9678 18.5593 11.1911 18.865 10.4149C18.9992 10.0744 19.1059 10.0025 19.4748 10.0022C20.6897 10.0015 21.9046 10.0042 23.1195 10C23.3608 9.99914 23.5706 10.041 23.6737 10.2877C23.7768 10.5346 23.6589 10.717 23.4887 10.885C23.1252 11.2437 22.7584 11.5996 22.4092 11.9719C22.3257 12.061 22.2672 12.2084 22.2631 12.3311C22.2468 12.8258 22.2573 13.3214 22.2554 13.8166C22.2551 13.9011 22.2501 13.987 22.234 14.0697C22.1866 14.3132 21.9876 14.4741 21.7624 14.4588C21.5283 14.4428 21.3399 14.2689 21.3364 14.0191C21.3263 13.3152 21.323 12.6108 21.3416 11.9072C21.345 11.7786 21.4433 11.6346 21.5346 11.5299C21.7046 11.3351 21.9015 11.1638 22.0623 10.9307C22.0121 10.9307 21.962 10.9307 21.9117 10.9307C21.223 10.9307 20.5343 10.9339 19.8456 10.9279C19.7115 10.9267 19.6391 10.9615 19.589 11.0953C19.3747 11.6667 19.1458 12.2324 18.9279 12.8024C18.8959 12.8862 18.8807 12.9817 18.8807 13.0717C18.8783 15.6872 18.8764 18.3027 18.8826 20.9182C18.8833 21.1743 18.8205 21.3827 18.642 21.5684C18.4562 21.7617 18.2884 21.9725 18.0898 22.2022C19.433 22.2022 20.7395 22.2022 22.0857 22.2022C21.8838 21.9789 21.6878 21.7927 21.5312 21.5777C21.4328 21.4426 21.3416 21.2659 21.3367 21.105C21.3157 20.417 21.323 19.7279 21.33 19.0392C21.3338 18.6705 21.5946 18.4594 21.9156 18.5471C22.1316 18.6061 22.2347 18.7658 22.2462 18.9731C22.2621 19.2585 22.2543 19.5452 22.2562 19.8314C22.2569 19.9398 22.2715 20.0507 22.2537 20.156C22.1492 20.7757 22.3647 21.2577 22.8393 21.6583C23.0621 21.8464 23.2387 22.0889 23.4373 22.3056C23.5894 22.4716 23.6719 22.6554 23.566 22.8754C23.4671 23.0807 23.2895 23.1475 23.0696 23.1474C21.0886 23.1452 19.1076 23.1454 17.1267 23.147C16.9066 23.1472 16.7275 23.0787 16.6352 22.8689C16.5437 22.6607 16.6098 22.4804 16.7549 22.3157C17.1182 21.9035 17.4803 21.4903 17.8348 21.0709C17.8939 21.001 17.945 20.8973 17.9453 20.8091C17.9517 19.0371 17.9501 17.2651 17.9497 15.493C17.9497 15.4655 17.9455 15.4379 17.9383 15.3505C17.8825 15.4784 17.8475 15.5517 17.8179 15.6273C16.8999 17.9721 15.9822 20.317 15.0645 22.6618C15.0476 22.705 15.031 22.7482 15.0138 22.7913C14.9292 23.0036 14.7841 23.136 14.5457 23.1452C14.3 23.1546 14.1382 23.0387 14.0352 22.8191C13.5958 21.8817 13.1526 20.9461 12.712 20.0093C11.9952 18.4851 11.2794 16.9605 10.5627 15.4363C10.531 15.369 10.4944 15.3039 10.426 15.1719C10.4159 15.3103 10.4062 15.3813 10.4062 15.4522C10.4053 16.7909 10.4013 18.1297 10.4121 19.4683C10.4132 19.5995 10.4766 19.7543 10.5611 19.8571C11.2241 20.664 11.8995 21.4608 12.571 22.2608C12.6008 22.2964 12.6301 22.3324 12.6588 22.3689C12.7844 22.5288 12.819 22.7038 12.7253 22.8885C12.6368 23.0632 12.4847 23.1454 12.2904 23.1454C10.766 23.146 9.24155 23.1461 7.71718 23.145C7.51407 23.1448 7.35981 23.0565 7.27085 22.8695C7.1744 22.667 7.24543 22.4944 7.37316 22.3336C8.02766 21.5099 8.68593 20.6891 9.33173 19.8586C9.41356 19.7534 9.46979 19.5972 9.47037 19.4644C9.47902 17.4526 9.47913 15.4406 9.47002 13.4287C9.46944 13.298 9.40891 13.1401 9.32279 13.0415C8.72238 12.3538 8.10781 11.6784 7.49788 10.999C7.45133 10.9472 7.40346 10.8965 7.35935 10.8427C7.23214 10.6875 7.18171 10.5167 7.27276 10.3263C7.3619 10.1398 7.51714 10.0535 7.72067 10.0535C9.26052 10.0529 10.8004 10.0535 12.3404 10.0526C12.6016 10.0524 12.7446 10.2002 12.847 10.4226C13.3996 11.6226 13.9567 12.8205 14.5123 14.0191C15.0029 15.0775 15.4936 16.1359 15.9845 17.1942C16.0163 17.2629 16.0505 17.3306 16.1078 17.4486ZM14.4882 21.5814C14.8703 20.6065 15.2406 19.6684 15.601 18.7266C15.6256 18.6623 15.5925 18.5624 15.5596 18.4914C14.4292 16.0453 13.2944 13.6012 12.1659 11.1542C12.1047 11.0215 12.036 10.9768 11.8909 10.9778C10.9088 10.9846 9.92663 10.981 8.94447 10.9821C8.8887 10.9821 8.83293 10.9934 8.75064 11.0024C9.22239 11.5282 9.67726 12.0239 10.1174 12.5322C10.2567 12.6932 10.3806 12.8768 10.4714 13.069C11.7746 15.8264 13.0708 18.5872 14.3691 21.3469C14.4012 21.415 14.4372 21.4812 14.4882 21.5814ZM8.66382 22.2035C9.56555 22.2035 10.4171 22.2035 11.3088 22.2035C10.843 21.6486 10.4009 21.1219 9.95002 20.5847C9.51552 21.1316 9.10018 21.6543 8.66382 22.2035Z'
                      fill='white'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M21.7883 17.0605C21.5413 17.0603 21.3335 16.8495 21.3337 16.5992C21.3339 16.3489 21.5421 16.1383 21.789 16.1385C22.0336 16.1387 22.247 16.3537 22.2468 16.5998C22.2466 16.8459 22.0328 17.0606 21.7883 17.0605Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>

        <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script type='text/javascript' src='js/mdb.min.js'></script>
        <script src='js/autodrop.js'></script>
      </body>
    </>
  );
}

export default Download;
