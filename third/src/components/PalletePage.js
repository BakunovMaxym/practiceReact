import Pallete from "./Pallete";
import '../App.css';
import { Link, useLocation, Routes, Route } from "react-router-dom";
import transition from "../transition";
import { useRef, useState } from "react";
import useClickOutside from "./useClickOuntsude";

function PalletePage({color}) {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [format, setFormat] = useState("RGB-(1,2,3)");
    const menuRef = useRef(null);
    const [isSoundOn, setIsSoundOn] = useState(true);


    useClickOutside(menuRef, () => {
        if(isOpen) setTimeout(() => setIsOpen(false), 50);
    });

    const formatHandler = (type) => {
        setFormat(type);
        setIsOpen(false);
    }

    return (
        <div>
            <header className="palleteHeader">
                <Link className="back" to="/">← Back</Link>
                <div className="dropdownContainer">
                    <button className="dropdownBtn" onClick={() => setIsOpen(!isOpen)}>Copy format: {format}</button>
                    <ul className={`dropdownMenuList ${isOpen ? "active" : ""}`} ref={menuRef}>
                        <li className="dropdownMenuItem" onClick={() => formatHandler("HEX(#AA1923)")}>HEX(#AA1923)</li>
                        <li className="dropdownMenuItem" onClick={() => formatHandler("HEX(AA1923)")}>HEX(AA1923)</li>
                        <li className="dropdownMenuItem" onClick={() => formatHandler("RGB-(1,2,3)")}>RGB-(1,2,3)</li>
                        <li className="dropdownMenuItem" onClick={() => formatHandler("RGBA-(1,2,3,0.4)")}>RGBA-(1,2,3,0.4)</li>
                    </ul>
                </div>
                <button className="soundBtn" onClick={() => setIsSoundOn(!isSoundOn)}>Sound {isSoundOn ? "On 🔊" : "Of 🔇"}</button>
            </header>
            <Pallete colorArr={color} format={format} isSoundOn={isSoundOn} styleClass="large" />

        </div>
    );
}

export default transition(PalletePage);
