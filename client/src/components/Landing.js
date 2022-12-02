import React from "react";

const styles = {
    nav: {
        background: 'pink',
    },
    header: {
        background: 'blue',
    },
    section: {
        background: 'yellow',
    }, 

}

function Landing() {
    return (
        <div>
            <nav className="navbar" style ={styles.nav}>
                <a href="/">login</a>
            </nav>
            <header className="header" style={styles.header}> 
                <h1>Welcome</h1>
            </header>
            <section className="section" style={styles.section}>
                <h2> Women in Tech </h2>
                <p> Testing!</p>
            </section>
        </div>
    );
}

export default Landing;