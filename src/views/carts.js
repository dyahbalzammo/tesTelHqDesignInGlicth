import React from 'react'

import { Helmet } from 'react-helmet'

import './carts.css'

const Carts = (props) => {
  return (
    <div className="carts-container">
      <Helmet>
        <title>Carts - Mobillio Online Store</title>
        <meta property="og:title" content="Carts - Mobillio Online Store" />
      </Helmet>
      <div className="carts-navbar">
        <header data-role="Header" className="carts-header max-width-container">
          <div className="carts-navbar1">
            <div className="carts-container01">
              <img
                alt="search3271286"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zMTkgMTQuNDMyNkMyMC43NjI4IDExLjI5NDEgMjAuNTQyIDYuNzUzNDQgMTcuNjU2OSAzLjg2ODI2QzE0LjUzMjcgMC43NDQwNjcgOS40NjczNCAwLjc0NDA2NyA2LjM0MzE1IDMuODY4MjZDMy4yMTg5NSA2Ljk5MjQ2IDMuMjE4OTUgMTIuMDU3OCA2LjM0MzE1IDE1LjE4MkM5LjIyODMzIDE4LjA2NzIgMTMuNzY5IDE4LjI4NzkgMTYuOTA3NSAxNS44NDQyQzE2LjkyMSAxNS44NTk0IDE2LjkzNTEgMTUuODc0NCAxNi45NDk3IDE1Ljg4OTFMMjEuMTkyNCAyMC4xMzE3QzIxLjU4MjkgMjAuNTIyMiAyMi4yMTYxIDIwLjUyMjIgMjIuNjA2NiAyMC4xMzE3QzIyLjk5NzEgMTkuNzQxMiAyMi45OTcxIDE5LjEwOCAyMi42MDY2IDE4LjcxNzVMMTguMzY0IDE0LjQ3NDlDMTguMzQ5MyAxNC40NjAyIDE4LjMzNDMgMTQuNDQ2MSAxOC4zMTkgMTQuNDMyNlpNMTYuMjQyNiA1LjI4MjQ4QzE4LjU4NTggNy42MjU2MiAxOC41ODU4IDExLjQyNDYgMTYuMjQyNiAxMy43Njc4QzEzLjg5OTUgMTYuMTEwOSAxMC4xMDA1IDE2LjExMDkgNy43NTczNiAxMy43Njc4QzUuNDE0MjEgMTEuNDI0NiA1LjQxNDIxIDcuNjI1NjIgNy43NTczNiA1LjI4MjQ4QzEwLjEwMDUgMi45MzkzMyAxMy44OTk1IDIuOTM5MzMgMTYuMjQyNiA1LjI4MjQ4WicgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg=="
                className="carts-image"
              />
              <input
                type="text"
                placeholder="search"
                className="carts-textinput input"
              />
            </div>
            <div className="carts-middle">
              <div className="carts-left">
                <span className="navbar-link">SHOP</span>
                <span className="navbar-link">LOOKBOOK</span>
                <span className="navbar-link">SPECIAL</span>
              </div>
              <span className="navbar-logo-title">MOBILLIO</span>
              <div className="carts-right">
                <span className="navbar-link">ABOUT</span>
                <span className="navbar-link">BLOG</span>
                <span className="navbar-link">CONTACT</span>
              </div>
            </div>
            <div className="carts-icons">
              <img
                alt="iconsbxscart3271299"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                className="carts-image1"
              />
              <img
                alt="iconsbxsheartcircle3271300"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="carts-image2"
              />
              <img
                alt="AccountCircle3271301"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="carts-image3"
              />
            </div>
          </div>
          <div data-role="BurgerMenu" className="carts-burger-menu">
            <svg viewBox="0 0 1024 1024" className="carts-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="carts-mobile-menu">
            <div className="carts-nav">
              <div className="carts-container02">
                <span className="carts-logo-center1">MOBILLIO</span>
                <div
                  data-role="CloseMobileMenu"
                  className="carts-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="carts-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="carts-middle1">
                <span className="carts-text06">SHOP</span>
                <span className="carts-text07">LOOKBOOK</span>
                <span className="carts-text08">SPECIAL</span>
                <span className="carts-text09">ABOUT</span>
                <span className="carts-text10">BLOG</span>
                <span className="carts-text11">CONTACT</span>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="carts-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="carts-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="carts-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="carts-container03">
        <div className="carts-container04">
          <div className="carts-container05">
            <input type="checkbox" checked="true" className="carts-checkbox" />
            <div className="carts-container06">
              <div className="carts-container07">
                <div className="carts-container08">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="carts-image4"
                  />
                  <div className="carts-container09">
                    <h2>LENOVO IDEAPAD SLIM 3 [AMD RYZEN 3-5300U] 8GB RAM</h2>
                    <h3>
                      <span>Rp. 1.500.000</span>
                      <br></br>
                    </h3>
                  </div>
                </div>
                <div className="carts-container10">
                  <div className="carts-container11">
                    <svg
                      viewBox="0 0 804.5714285714286 1024"
                      className="carts-icon10"
                    >
                      <path d="M292.571 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM438.857 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM585.143 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM658.286 834.286v-541.714h-512v541.714c0 27.429 15.429 43.429 18.286 43.429h475.429c2.857 0 18.286-16 18.286-43.429zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"></path>
                    </svg>
                  </div>
                  <div className="carts-container12">
                    <input
                      type="text"
                      value="1"
                      className="carts-textinput1 input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carts-container13">
            <input type="checkbox" checked="true" className="carts-checkbox1" />
            <div className="carts-container14">
              <div className="carts-container15">
                <div className="carts-container16">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="carts-image5"
                  />
                  <div className="carts-container17">
                    <h2>LENOVO IDEAPAD SLIM 3 [AMD RYZEN 3-5300U] 8GB RAM</h2>
                    <h3>
                      <span>Rp. 1.500.000</span>
                      <br></br>
                    </h3>
                  </div>
                </div>
                <div className="carts-container18">
                  <div className="carts-container19">
                    <svg
                      viewBox="0 0 804.5714285714286 1024"
                      className="carts-icon12"
                    >
                      <path d="M292.571 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM438.857 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM585.143 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM658.286 834.286v-541.714h-512v541.714c0 27.429 15.429 43.429 18.286 43.429h475.429c2.857 0 18.286-16 18.286-43.429zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"></path>
                    </svg>
                  </div>
                  <div className="carts-container20">
                    <input
                      type="text"
                      value="1"
                      className="carts-textinput2 input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carts-container21">
            <input type="checkbox" checked="true" className="carts-checkbox2" />
            <div className="carts-container22">
              <div className="carts-container23">
                <div className="carts-container24">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="carts-image6"
                  />
                  <div className="carts-container25">
                    <h2>LENOVO IDEAPAD SLIM 3 [AMD RYZEN 3-5300U] 8GB RAM</h2>
                    <h3>
                      <span>Rp. 1.500.000</span>
                      <br></br>
                    </h3>
                  </div>
                </div>
                <div className="carts-container26">
                  <div className="carts-container27">
                    <svg
                      viewBox="0 0 804.5714285714286 1024"
                      className="carts-icon14"
                    >
                      <path d="M292.571 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM438.857 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM585.143 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM658.286 834.286v-541.714h-512v541.714c0 27.429 15.429 43.429 18.286 43.429h475.429c2.857 0 18.286-16 18.286-43.429zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"></path>
                    </svg>
                  </div>
                  <div className="carts-container28">
                    <input
                      type="text"
                      value="1"
                      className="carts-textinput3 input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carts-container29">
        <div className="carts-container30">
          <h2>
            <span>Total Harga</span>
            <br></br>
          </h2>
          <h3>
            <span>Rp. 1.500.000</span>
            <br></br>
          </h3>
        </div>
        <div className="carts-container31">
          <button className="carts-button button">Beli</button>
        </div>
      </div>
    </div>
  )
}

export default Carts
