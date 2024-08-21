'use client'
import Link from "next/link"
import style from "./styles.module.css"
import { useState } from "react"

const NavBar = () =>{
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onChangeStateBtn= () =>{
        setMenuIsOpen(!menuIsOpen)
    }   
    return (
        <>
            <button type="button" title="hamburgerMobile" className={menuIsOpen? `${style.hamburgerMenuBtn} ${style.hide}`: style.hamburgerMenuBtn} onClick={onChangeStateBtn}>
                hamburger icon
            </button>
            <button type="button" title="background" className={menuIsOpen? `${style.backgroud}`: style.background} onClick={onChangeStateBtn}></button>
            <nav className={menuIsOpen?`${style.nav}`: `${style.hide} ${style.nav}`}>
                <Link href="/about"> About </Link>
                <Link href="/slideshow"> Slideshow</Link>
                <Link href="/timeline"> Timeline</Link>
            </nav>
        </>
    )
}

export default NavBar