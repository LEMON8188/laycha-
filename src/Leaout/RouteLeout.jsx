import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RouteLeout() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Menu">Menu</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
                gfgfgfjhgf
            </main>
            <footer></footer>
        </>
    )
}

export default RouteLeout