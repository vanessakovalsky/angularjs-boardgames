angular.module("entete",[])
    .component("entete", {
        templateUrl: 'entete/entete.template.html',
        bindings: {
            data: '<'
        },
        controller: function EnteteController(){
            var vm = this;
        }
    }
    )