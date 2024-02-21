class loginForm extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback(){
        const path = this.getAttribute("source")
        let div = document.createElement('div')
        div.classList.add('container')
        let imgCont = document.createElement('div')
        imgCont.classList.add('imgCont')
        let img = document.createElement('img')
        img.src = path
        imgCont.appendChild(img)
        div.appendChild(imgCont)

        let controlsCont = document.createElement('div')
        controlsCont.classList.add('ctrl')
        let a = 
        `
        <div class="input-container">
            <input onclick="" type="text" id="i1">
            <label for="i1" id="l1">Numero di telefono, nome utente o e-mail</label>
        </div>
        <div class="input-container">
            <input onclick="" type="password" id="i1">
            <label for="i1" id="l1">Password</label>
        </div>
            <button> Accedi</button>
            <article id="art">
                <hr size="1">
                <p>O</p>
            </article>
            <div id="fb"><img src="IMG/fb.png"><p> <b>Accedi con Facebook </b></p></div>
            <a href="">Password dimenticata?</a>
            <p id="sega">Puoi anche segnalare i contenuti che ritieni violino nel tuo Paese senza accedere.</p>
        `
        controlsCont.innerHTML = a
        div.appendChild(controlsCont)
        const css = document.createElement('style')
        css.textContent = 
        `
        @import url('https://fonts.googleapis.com/css2?family=Handjet&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:wght@100&family=Nunito:wght@300;400&family=Open+Sans&family=Roboto:wght@100;300&display=swap');
            *{
                font-family: "Lato", sans-serif;
            }
            .input-container {
                position: relative;
                width: 200px;
              }
              
              #i1 {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
              }
              
              #l1{
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: #999;
                pointer-events: none;
                transition: all 0.3s ease;
              }
              
              #i1:focus + #l1,
              #i1:not(:placeholder-shown) + #l1 {
                top: 5px;
                font-size: 12px;
                color: #333;
              }
              
              #i1:not(:focus):not(:placeholder-shown) + #l1 {
                top: 50%;
              }
            .container{
                width: 100%;
                height: 100%;
                border: 0.1px solid rgb(212, 212, 212);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
            }
            .ctrl{
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
            }
            .imgCont{
                display:flex;
                justify-content: center;
                align-items: center;
                width: 100%;
            }
            .imgCont>img{
                width: 180px;
                padding: 50px 50px 30px 50px;
            }
            input{
                width: 72%;
                margin: 3px;
                height: 30px;
                font-size: .75rem;
                border: 0.1px solid #dadada;
                background: #f9f9f9;
                color: #727272;
                padding-left: 4px;
                border-radius: 2px;
            }
            ::placeholder {
                color: #727272;
                opacity: 1;
            }
            button{
                width:74%;
                margin: 10px 0px 0px 0;
                height: 30px;
                border-radius: 5px;
                border-color: #4eb5f7;
                background: #4eb5f7;
                color: #fff;
                
            }
            hr{
                color: rgb(212,212,212)
            }
            #art{
                width:74%;
                margin-top: 20px;
                margin-bottom: 20px;
                position: relative
            }
            #art>p{
                z-index: 2;
                width: 40px;
                height: 15px;
                background: #fff;
                position: absolute;
                text-align: center;
                top: -90%;
                left: 40%;
                font-weight: 50;
            }
            #fb{
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #405c93;
            }
            #fb>img{
                height: 15px;
                margin-right: 5px;
            }
            a{
                text-decoration: none;
                font-size: 0.8rem;
                color: #03377d;
            }
            #sega{
                text-decoration: none;
                font-size: 0.8rem;
                color: #727280;
                width: 80%;
                text-align: center;
            }
        `
        this.shadowRoot.appendChild(div)
        this.shadowRoot.appendChild(css)

    }
}
customElements.define("marco-abalintoaie", loginForm)
const array = [
    "Meta",
    "Informazioni",
    "Blog",
    "Lavora con noi",
    "Aiuto",
    "API",
    "Privacy",
    "Condizioni",
    "Luoghi",
    "Instagram Lite",
    "Threads",
    "Caricamento dei contatti e non-utenti",
    "Meta Verified"
];
let footer = document.querySelector('footer')
array.forEach(item => {
    let a = document.createElement('span')
    a.textContent = item
    footer.appendChild(a);
})

// function changePlaceholder(this){
     
// }