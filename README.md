# liensWeb-javascript
Créez des pages web interactives avec JavaScript - Activité 3 (finale) | Openclassrooms

### Dans cette activité finale, vous allez utiliser un serveur web externe pour rendre votre application de liens web véritablement opérationnelle.
  * Utilisation de l'API -  https://oc-jswebsrv.herokuapp.com pour récupérer les derniers liens publiés et ajouter un nouveau lien.   
    - L’API de récupération des liens est https://oc-jswebsrv.herokuapp.com/api/liens. Elle renvoie les derniers liens ajoutés sous   forme de tableau JSON.
    - L’API d’ajout d’un lien est https://oc-jswebsrv.herokuapp.com/api/lien. Elle attend un objet JSON représentant un lien.
  * Voici le format JSON d’un lien:

     {
     
        “titre”: “titre du lien”,
        “url”: “URL du lien”,
        “auteur”: “auteur du lien”
        
      } 
      
  * Exemple possible de rendu:
    
![activité 3 logo](https://static.oc-static.com/prod/courses/files/creez-des-pages-web-interactives-avec-javascript/activite_3_demo.gif "activité 3 exemple")

#### Voici quelques consignes supplémentaires :

   - Les liens affichés sont récupérés depuis le serveur.
   - Le nouveau lien n’est affiché sur la page qu’en cas de succès de l’ajout sur le serveur.
   - Le formulaire d’ajout est remplacé par le bouton “Ajouter un lien” quel que soit le résultat de l’ajout sur le serveur.
   - Contrairement à l’activité 2, le rechargement de la page web affiche toujours le nouveau lien puisque celui-ci est sauvegardé sur le serveur.
   - Les communications avec le serveur utilisent les fonctions ajaxGet et ajaxPost définies dans le cours.
   - Les variables JavaScript doivent respecter la norme camelCase et le fichier liensweb.js doit être correctement indenté.

*Remarque : le serveur est utilisé par tous les apprenants OpenClassrooms. La liste des liens varie en fonction de leur activité.*


    
    
