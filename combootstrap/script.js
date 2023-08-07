const headerInfo = {
    logoSrc: "img/cataventos.png", // Caminho da imagem da logo
    menuOptions: [
        { text: "Loja", link: "index.html" },
        { text: "Clube", link: "clube.html" }
    
    ]
};

// Selecionando o elemento do header
const headerElement = document.querySelector(".navbar");

// Removendo todas as opções de menu existentes
const menuElement = headerElement.querySelector(".nav-tabs");
menuElement.innerHTML = "";

// Adicionando a logo dinamicamente ao header
const logoElement = headerElement.querySelector("#logo");
logoElement.src = headerInfo.logoSrc;

// Adicionando as opções de menu dinamicamente ao header
headerInfo.menuOptions.forEach(option => {
    const liElement = document.createElement("li");
    liElement.classList.add("nav-item");

    const aElement = document.createElement("a");
    aElement.classList.add("nav-link");
    aElement.href = option.link;
    aElement.textContent = option.text;

    liElement.appendChild(aElement);
    menuElement.appendChild(liElement);
});

//menu2
const menuInfo = [
    { text: "Medicamentos", link: "index.html" },
    { text: "Dermocosméticos", disabled: true },
    { text: "Nossas Ofertas", disabled: true },
    { text: "Quem Somos", disabled: true },
    { text: "Fale Conosco", link: "contactUs.html" }
];

// Função para adicionar as opções de menu dinamicamente
function atualizarMenu() {
    const menuElement = document.getElementById("menuList");
    menuElement.innerHTML = "";

    menuInfo.forEach(option => {
        const liElement = document.createElement("li");
        liElement.classList.add("nav-item");

        const aElement = document.createElement("a");
        aElement.classList.add("nav-link");
        aElement.href = option.link || "#";
        aElement.textContent = option.text;
        if (option.disabled) {
            aElement.classList.add("disabled");
            aElement.removeAttribute("href");
        }

        liElement.appendChild(aElement);
        menuElement.appendChild(liElement);
    });
}

// Chama a função para adicionar as opções de menu ao carregar a página
atualizarMenu();

