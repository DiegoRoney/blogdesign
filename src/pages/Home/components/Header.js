import React from 'react';

function Header() {
    return(
    <header className='header'>
        <div className='toolbar'>
            <div>
                <a href='/'>Logo</a>
            </div>

            <div>
                <button>Novo Post</button>
                <span>img1</span>
                <span>img2</span>
                <span>img3</span>
            </div>
            //deletar isso

            <button className = 'button'>Novo Post</button>

        </div>
    </header>
    )
}

export default Header;