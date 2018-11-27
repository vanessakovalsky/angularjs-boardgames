angular.module("detailGame",[])
    .component("detailGame", {
        templateUrl :  'detail/detail.template.html',
        bindings: {
            data: '<'
        },
        controller: function($rootScope){
            this.editeur = "Asmodee";
            this.titre2 = $rootScope.titre;
        }
    })