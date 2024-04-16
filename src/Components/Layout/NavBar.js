import React from 'react'

function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            <a class="nav-link" href="/about">About</a>
                            <a class="nav-link" href="/add">Add</a>
                            <a class="nav-link" href="/show">Show</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar