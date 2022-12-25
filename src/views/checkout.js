import React from 'react'

import { Helmet } from 'react-helmet'

import './checkout.css'

const Checkout = (props) => {
  return (
    <div className="checkout-container">
      <Helmet>
        <title>Checkout - Mobillio Online Store</title>
        <meta property="og:title" content="Checkout - Mobillio Online Store" />
      </Helmet>
      <div className="checkout-container01">
        <h2>Checkout</h2>
      </div>
      <div className="checkout-container02">
        <div className="checkout-container03">
          <h3>Alamat Pengiriman</h3>
        </div>
        <div className="checkout-container04">
          <span>fahmi</span>
          <span>628158266887</span>
          <span>
            <span>
              Sumberjaya, Kec. Tambun Sel., Bekasi, Jawa Barat (perum wali
              barokah blok d no 10) 
            </span>
            <span>Tambun Selatan, Kab. Bekasi, 17510</span>
          </span>
        </div>
      </div>
      <div className="checkout-container05">
        <div className="checkout-container06">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="checkout-image"
          />
          <div className="checkout-container07">
            <h3>
              LENOVO IDEAPAD SLIM 3 [AMD RYZEN 3-5300U]
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h3>
            <span>1 barang (3 kg)</span>
          </div>
        </div>
        <div className="checkout-container08">
          <select className="checkout-select">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <div className="checkout-container09">
          <select className="checkout-select1">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>
      <div className="checkout-container10">
        <div className="checkout-container11">
          <h3>
            <span>Total Tagihan</span>
            <br></br>
          </h3>
          <span>
            <span>Rp. 1.500.000</span>
            <br></br>
          </span>
        </div>
        <div className="checkout-container12">
          <button className="checkout-button button">Bayar</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
