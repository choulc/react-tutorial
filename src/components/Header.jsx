import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <React.Fragment>
            <header>
                <Link to="/">
                    <div className="logo">
                        微笑台灣創意教案
                    {/* <a href="index.html">微笑台灣創意教案</a> */}
                    </div>
                </Link>
            </header>
        </React.Fragment>
    )
}