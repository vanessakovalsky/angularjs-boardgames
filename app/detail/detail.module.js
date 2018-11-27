angular.module("detailGame",[])
    .component("detailGame", {
        templateUrl :  'detail/detail.template.html',
        bindings: {
            data: '<'
        },
        controller: function($rootScope){
            this.editeur = "Asmodee";
            this.titre2 = $rootScope.titre;
            this.isVisible = false;
            this.showForm =  function(){
                if (this.isVisible == false) {
                    this.isVisible = true;
                }
                else {
                    this.isVisible = false;
                }
            }
        }
    })