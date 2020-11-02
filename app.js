const btn = document.querySelector('#btn');
const cytat = document.querySelector('#cytat');
const autor = document.querySelector('#autor');

const base = [
    {
        autor: "Stanisław Wyspaiński",
        content: "Mego dziada piłą rżnęli, myśmy wszystko zapomnieli."
    }, 
    {
        autor: "Stanisław Wyspaiński",
        content: "Wyście sobie a my sobie każden sobie rzepkę skrobie."
    }, 
    {
        autor: "Antoine de Saint-Exupéry",
        content: "Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu."
    }, 
    {
        autor: "A.A. Milne",
        content: "Wiesz, Prosiaczku… miłość jest wtedy… kiedy kogoś lubimy… za bardzo." 
    }, 
    {
        autor: "Napoléon Bonaparte",
        content: "W Polsce zetknąłem się z V żywiołem: błotem."
    },
    {
        autor: "Winston Churchill",
        content: "Nigdy tak wielu nie zawdzięczało tak wiele tak nielicznym."
    },
    {
        autor: "Witold Urbanowicz",
        content: "Nie błagamy o wolność, my walczymy o wolność."
    },
    {
        autor: "Mark Twain",
        content: "Aby zerwać z nawykiem, wyrób sobie inny, który go wymaże."
    }, 
    {
        autor: "Wisława Szymborska",
        content: "Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła."
    },
    {
        autor: "Umberto Eco",
        content: "Kto czyta książki, żyje podwójnie."
    }
];

document.addEventListener('DOMContentLoaded', pickQoute);
btn.addEventListener('click', pickQoute);

function pickQoute() {
    let qouteIndex = Math.floor(Math.random() * base.length);
    
    cytat.textContent = base[qouteIndex].content;
    autor.textContent = base[qouteIndex].autor;
};
