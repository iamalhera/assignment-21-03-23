import React from 'react'
import { MdiGithub } from '../assets/icons/icons'

const Navbar = ({ dataSetter,setIsLoading }) => {
    function getUserHandler() {
        setIsLoading(true);
        setTimeout(()=>{
            fetch("https://reqres.in/api/users?page=1")
                .then((res) => res.json())
                .then((result) =>{
                    setIsLoading(false);   
                    dataSetter(result.data)
                });
        },3000)
    }
    return (
        <div className="navbar-comp">
            <div className="navbar-left">
                <h1>Home Assignment</h1>
            </div>
            <div className="navbar-right">
                <button
                    className="btn-fetch"
                    onClick={getUserHandler}
                >Get Users</button>
                <a href="https://github.com/iamalhera/assignment-21-03-23">
                <MdiGithub />
                </a>
            </div>
        </div>
    )
}

export default Navbar