/**
 * FONCTIONS GENERIQUES AJAX
 */


/**
 * AJAX GET
 */

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();

    req.open("GET", url);

    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });

    req.addEventListener("error", function() {
        console.error("Erreur réseau avec l'URL " + url);
    });

    req.send(null);
}

/**
 * exemple d'appel à la fonction
 */
// 1e exemple:
/*function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);*/

// 2e exemple:
/*ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function(reponse) {
    console.log(reponse);
});
// ou
ajaxGet("http://localhost/javascript-web-srv/data/films.json", (reponse) => {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);

    // Affiche le titre de chaque film
    films.forEach(function(film) {
        console.log(film.titre);
    })
});*/

// -------------------------------------------------------------------------------------------

/**
 * AJAX POST
 */


// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
// Exécute un appel AJAX POST

// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès

// Le paramètre isJson permet d'indiquer si l'envoi concerne des données JSON

function ajaxPost(url, data, callback, isJson) {
    var req = new XMLHttpRequest();
    req.open("POST", url);

    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });

    req.addEventListener("error", function() {
        console.error("Erreur réseau avec l'URL " + url);
    });

    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");

        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    req.send(data);
}

/**
 * Exemple d'appel de la fonction
 */

// On récupère les données du formulaire
/*var commande = new FormData();
commande.append("couleur", "rouge");
commande.append("pointure", "43");

// Envoi de l'objet FormData au serveur
ajaxPost("http://localhost/javascript-web-srv/post_form.php", commande,
    function(reponse) {
        // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur");
    }
);*/

/**
 * Exemple de récupération des données du formulaire avec l'objet FormData
 * et de l'envoi de ces données à l'API
 */

/*var form = document.querySelector("form");
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, function () {});
});*/

/**
 * Exemple d'utilisation de la fonction
 */

// Création d'un objet représentant un film
/*var film = {
    titre: "Zootopie",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};
// Envoi de l'objet au serveur
ajaxPost("http://localhost/javascript-web-srv/post_json.php", film,
    function (reponse) {
        // Le film est affiché dans la console en cas de succès
        console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
    },
    true // Valeur du paramètre isJson
);*/