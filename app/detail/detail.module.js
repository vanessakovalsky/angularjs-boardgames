angular.module("detailGame",["ngRoute"])
    .component("detailGame", {
        templateUrl :  'detail/detail.template.html',
        bindings: {
            data: '<'
        },
        controller: ['$routeParams', function($routeParams){
            this.idJeu = $routeParams.jeuId;
            this.isVisible = false;
            this.showForm =  function(){
                if (this.isVisible == false) {
                    this.isVisible = true;
                }
                else {
                    this.isVisible = false;
                }
            }
        }]
    })