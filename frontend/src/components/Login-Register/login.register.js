import React, { Component } from 'react'
// import HeaderTop from '../header/header.top'
import HeaderMiddle from '../Header/header.middle'
// import HeaderBottom from '../header/header.bottom'
import Footer from "../Footer/footer";
import ContentLoginRegister from './content.login.register'
const Home = ({ setEmailogin, setPasswordlogin, setEmail,
    setFirstname, setLastname, setAddress, setPhone, setPassword, setConfirm,
    notificationRegister,notificationLogin, registerSubmit, 
     loginSubmit, islogin, logout, sortType, setSortType, setSearchText,
     searchTextSubmit, history}) => (
        <div>
            <header id="header">
          
                <HeaderMiddle
                    islogin={islogin}
                    logout={() => logout}
                    history={history}
                    />
               
            </header>
            <ContentLoginRegister
                setEmailogin={(value) => setEmailogin(value)}
                setPasswordlogin={(value) => setPasswordlogin(value)}
                setEmail={(value) => setEmail(value)}
                setFirstname={(value) => setFirstname(value)}
                setLastname={(value) => setLastname(value)}
                setAddress={(value) => setAddress(value)}
                setPhone={(value) => setPhone(value)}
                setPassword={(value) => setPassword(value)}
                setConfirm={(value) => setConfirm(value)}
                notificationRegister={notificationRegister}
                notificationLogin={notificationLogin}
                registerSubmit={() => registerSubmit()}
                loginSubmit={() => loginSubmit()}
            />
            <footer id="footer">
                <Footer />
            </footer>
        </div>

    )

export default Home