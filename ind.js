window.onload = function masquer() {
  // Masquer le bouton "Essayer de nouveau"
  document.getElementById("btnEssayer").style.display = "none";
  document.getElementById("mas").style.display = "none";
};

const mots = [
  "Bonjour",
  "Maison",
  "Chat",
  "Chien",
  "Voiture",
  "École",
  "Livre",
  "Jardin",
  "Soleil",
  "Pluie",
  "Parapluie",
  "Montagne",
  "Mer",
  "Arbre",
  "Fleur",
  "Télévision",
  "Musique",
  "Rire",
  "Amour",
  "Amitié",
  "Cuisine",
  "Chapeau",
  "Chemise",
  "Pantalon",
  "Chaussures",
  "Sac",
  "Téléphone",
  "Ordinateur",
  "Internet",
  "Voyage",
  "Avion",
  "Train",
  "Bus",
  "Vélo",
  "Natation",
  "Football",
  "Tennis",
  "Lecture",
  "Écriture",
  "Dessin",
  "Couleur",
  "Bonheur",
  "Tristesse",
  "Espoir",
  "Réveil",
  "Sommeil",
  "Étoile",
  "Lune",
  "Nuit",
  "Matin",
  "Manger",
  "Boire",
  "Parler",
  "Écouter",
  "Chanter",
  "Danse",
  "Cœur",
  "Anniversaire",
  "Cadeau",
  "Vacances",
  "Nature",
  "Insecte",
  "Oiseau",
  "Vitesse",
  "Calme",
  "Silence",
  "Rêve",
  "Art",
  "Science",
  "Histoire",
  "Santé",
  "Maladie",
  "Sourire",
  "Pardon",
  "Partage",
  "Courage",
  "Bonté",
  "Sagesse",
  "Liberté",
  "Vérité",
  "Beauté",
  "Famille",
  "Enfant",
  "Parents",
  "Frère",
  "Sœur",
  "Grand-père",
  "Grand-mère",
  "Mariage",
  "Maison",
  "Jour",
  "Soirée",
  "Matinée",
  "Printemps",
  "Été",
  "Automne",
  "Hiver",
  "Chaud",
  "Froid",
  "Rire",
];
function lire() {
  document.getElementById(
    "desc"
  ).innerHTML = `<h3>Bienvenue dans le jeu du mot mystère!</h3>
  <p style="color: black;">Votre mission est de deviner un mot secret en proposant des mots jusqu'à ce que vous trouviez le mot correct. Vous disposez de 5 essais pour y parvenir.</p>
  
  <p style="color: black;">Le mot mystère est caché et vous devez le découvrir en proposant des mots.</p>
  <p style="color: black;">Après chaque proposition, le jeu vous indiquera si le mot que vous avez proposé est correct ou non.</p>
  
  <p style="color: black;">Si vous trouvez le mot mystère, vous serez félicité pour votre réussite.</p>
  <p style="color: black;">Cependant, si vous n'arrivez pas à trouver le mot dans les 5 essais, la partie sera terminée et le mot correct sera révélé.</p>
  
  <p>Prêt à relever le défi ? Alors commençons !</p>
  <p style="color: black;">Entrez un mot dans la zone prévue à cet effet et cliquez sur le bouton 'Entrer' pour l'envoyer. Le jeu vous donnera des indications pour vous rapprocher du mot mystère à chaque tentative.</p>
  
  <p style="color: black;">N'oubliez pas, chaque mot est une nouvelle chance de trouver la bonne réponse. Bonne chance et amusez-vous bien en jouant au jeu du mot mystère !</p>
  `;

  document.getElementById("btnEssayer").style.display = "none";
  document.getElementById("entrer").style.display = "none";
  document.getElementById("nouvo").style.display = "none";
  document.getElementById("mas").style.display = "block";
  document.getElementById("lir").style.display = "none";
  document.getElementById("mt").style.display = "none";
  document.getElementById("jx").style.display = "none";
}
function masq() {
  document.getElementById("desc").innerHTML = "";
  document.getElementById("mt").style.display = "block";
  document.getElementById("entrer").style.display = "block";
  document.getElementById("nouvo").style.display = "block";
  document.getElementById("lir").style.display = "block";
  document.getElementById("mas").style.display = "none";
  document.getElementById("jx").style.display = "block";
}

function randomWord(index) {
  return mots[index];
}
var mot;
function jeux() {
  var index = Math.floor(Math.random() * mots.length);

  mot = randomWord(index).toLowerCase();
  document.getElementById("long").innerHTML =
    "le mot est constitué de " + mot.length + " caractères";

  console.log(mot);
}
let existingMessages = []; // Tableau pour stocker les messages existants

function verifyContent(msg) {
  return existingMessages.includes(msg);
}

function vérification() {
  var word = document.getElementById("mt").value;
  var found = false;

  if (word.length == mot.length) {
    if (word === mot) {
      document.getElementById("res").innerHTML =
        "Félicitations! vous avez deviné le mot " + mot;
    } else {
      for (let i = 0; i < mot.length; i++) {
        for (let k = 0; k < word.length; k++) {
          if (mot[i] == word[k]) {
            let letter = `Le mot contient le caractère "${
              mot[i]
            }" à la position ${i + 1}`;
            found = verifyContent(letter);

            if (!found) {
              document
                .getElementById("m1")
                .insertAdjacentHTML("beforeend", letter + "<br>");
              existingMessages.push(letter); // Ajouter le message au tableau des messages existants
            }

            break;
          }
        }
      }
      document.getElementById("m2").innerHTML = `Essayer de nouveau :) <br> `;
      document.getElementById("btnEssayer").style.display = "block";
    }
  } else {
    document.getElementById("res").innerHTML =
      "les mots ne sont pas de meme longeur";
    document.getElementById("btnEssayer").style.display = "block";
  }
}


var compteurClics = 0;

function essayer() {
  compteurClics++;
  console.log("Nombre de clics : " + compteurClics);
  document.getElementById("mt").value = "";
  document.getElementById("res").innerHTML = "";
  document.getElementById("m2").innerHTML = "";
  document.getElementById("btnEssayer").style.display = "none";
  document.getElementById("m4").innerHTML="vous avez "+ compteurClics +" essaies";
  if (compteurClics === 5) {
    document.getElementById("m1").innerHTML = "";
    document.getElementById("m3").innerHTML =
      "le mot est " + mot + " <br /> commencer nouveau jeux";

    
  }
}

function nouveau() {
  document.getElementById("long").innerHTML = "";
  document.getElementById("jx").disabled = false;
  document.getElementById("mt").value = "";
  document.getElementById("res").innerHTML = "";
  document.getElementById("m1").innerHTML = "";
  document.getElementById("m2").innerHTML = "";
  document.getElementById("m3").innerHTML = "";
  document.getElementById("m4").innerHTML = "";
  document.getElementById("btnEssayer").style.display = "none";
}
