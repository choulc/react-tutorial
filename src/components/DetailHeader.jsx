import React from 'react';
import { Link } from 'react-router-dom';

const DetailHeader = () => {
    return (
        <React.Fragment>
            <header class="casestudies">
                <Link to="/">
                    <div class="logo">
                        微笑台灣創意教案
                    {/* <a href="index.html">微笑台灣創意教案</a> */}
                    </div>
                </Link>
            </header>
        </React.Fragment>
    );
}

export default DetailHeader;