angular.module('formGame',[])
    .component('formGame', {
        templateUrl: 'form-game/form-game.template.html',
        bindings: {
            jeu : '<'
        },
        controller: function($http){
            this.SubmitJeu = function(){
                console.log('formulaire soumis');
                console.log(this.jeu);
                this.jeu.id=null;
                $http.post('https://jsonplaceholder.typicode.com/posts', this.jeu).then(
                    function(response){
                        console.log(response);
                    },
                    function(response){
                        console.log('erreur');
                        console.log(response);
                    }
                );
                $http.get('https://jsonplaceholder.typicode.com/posts').then(
                    function(response2){
                        console.log(response2);
                    },
                    function(response2){
                        console.log('erreur');
                        console.log(response2);
                    }
                );

            }
        }
    })