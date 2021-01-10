import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CloudIcon from '@material-ui/icons/Cloud';

function Header() {

    const iconStyles = makeStyles({
        root: {
            fontSize: 80,
            color: "powderblue",
            margin: 10,
            backgroundColor: "white",
            borderRadius: 50,
            boxShadow: "0 15px 5px rgba(0, 0, 0, 0.5)"
        }
    })

    const styles = iconStyles();

    return (
        <header>
            <h1>
                <CloudIcon className={styles.root} />
                Weather App
            </h1>
        </header>
    )
}

export default Header;
