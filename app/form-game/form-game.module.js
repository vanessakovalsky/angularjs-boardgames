angular.module('formGame',[])
    .component('formGame', {
        templateUrl: 'form-game/form-game.template.html',
        bindings: {
            jeu : '<'
        },
        controller: function(){
            this.SubmitJeu = function(){
                console.log('formulaire soumis');
                console.log(this.jeu);
                $http.post('/jeu/:id', $jeu);

            }
        }
    })