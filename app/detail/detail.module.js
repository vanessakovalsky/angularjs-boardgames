angular.module("detailGame",[])
    .component("detailGame", {
        templateUrl :  'detail/detail.template.html',
        controller: function($rootScope){
            this.editeur = "Asmodee";
            this.titre2 = $rootScope.titre;
            console.log($rootScope);
        }
    })