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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet et eaque neque obcaecati tempora vero numquam dolorem aliquam quos qui, temporibus officiis quasi eos vitae laboriosam hic explicabo quaerat, magni deleniti aspernatur laudantium voluptate! Maiores reiciendis quae optio dolorem?
            </main>
            <footer></footer>
        </>
    )
}

export default RouteLeout