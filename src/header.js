const homePage = () => {

    let content = document.querySelector('#content');

    content.innerHTML =
    ` <header class="header">
        <h2>WelCome to Tea Time</h2>
        <ul>
        <li class="tab home"><a href="#">Home</a></li>
        <li class="tab about"><a href="#">About</a></li>
        <li class="tab menu"><a href="#">Menu</a></li>
        <li class="tab contact"><a href="#">Contact</a></li>
        </ul>     
        </header>
        <main id="home">
        </main>
    `;

};
const homePageContent = () => {
    let main = document.querySelector('main');
    main.innerHTML = 
    `<section id="main-content">
            <h3>
                Best coffe in Town with sandwich.
            </h3>
            <p>  "A Cup of Coffee, a Sandwich and You" is a 1925 song written by Joseph Meyer, with lyrics by Al Dubin and Billy Rose. The title was inspired by the famous line "A Jug of Wine, a Loaf of Bread--and Thou" from the Rubaiyat of Omar Khayyam.[1][2] The song first gained popularity after it was performed (and recorded) by Gertrude Lawrence and Jack Buchanan in André Charlot's show Charlot's Revue[1] when it came to New York in 1926. The song was Dubin's first significant success[2] and was credited with bringing Lawrence and Buchanan popularity in the United States</p>
        </section>
    `;
}
export {homePage, homePageContent};