import './App.css';
import reportWebVitals from './reportWebVitals';
import React, {useEffect} from 'react';
import {Route, Routes, Link,} from "react-router-dom";
import CardHome from "./components/card-home";
import CardContacts from "./components/card-contacts";
import CardAbout from "./components/card-about";

function App() {
    const a=document.links;
    useEffect(()=>{
        window.addEventListener('click',(e)=>{
            for(let i in a){
                a[i].parentElement.classList.remove('active');
                if(e.target===a[i]){
                    a[i].parentElement.classList.add('active');
                }
            }
        })
    },[])
    return (
        <div className={'container'}>
            <ul className={'menu'}>
                <li className={'menu__link'}><Link to={'/'}>Home</Link></li>
                <li className={'menu__link'}><Link to={'/about'}>About</Link></li>
            <li className={'menu__link'}><Link to={'/contacts'}>Contacts</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<CardHome/>}/>
                <Route path="/about" element={<CardAbout/>}/>
                <Route path="/contacts" element={<CardContacts/>}/>
            </Routes>
        </div>
    );
}
export default App;
