// funkcja obsługująca zachowania lików i zmiany lokalizacji
// przechytuje herfa i ustawia go 
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    
    handleLocation();
};

// definujemy sciezki w słowniku
const routes = {
    404: "/Common/404.html", 
    "/": "/Home/home.html",
    "/about": "/About/about.html",
    "/image_processing": "/ImageProcessing/image_processing.html",
    "/tutorial": "/Tutorial/tutorial.html",
};

const handleLocation = async () => {

    // przechwytujemy nazwe sciezki w której jestesmy
    const path = window.location.pathname;

    // wejź scierzke po kluczu inaczej wybierz sciezke 404
    const route = routes[path] || routes[404];

    // załadowanie kodu HTML poprzez pobranie go przez fetch(trasa_do_html)
    // transformujemy naszą odpowiedz to formatu text
    const html = await fetch(route).then((data) => data.text());

    // przypisanie pobranego HTML do naszego diva
    document.getElementById("main-page").innerHTML = html;
};

// obsłużenie funkcji routingu przeglądarki i pierwsze ładowanie strony
// obsługuje jak użytkownik bedzie się cofał w lub klikał przycisk do przodu
window.onpopstate = handleLocation;


window.route = route;

// załadowanie strony dla dowolnej scieżki
handleLocation();