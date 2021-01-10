import React from "react";

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div>
            <footer>
                <p>Copyright &copy; {year} All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer;