angular.module("home",[])
    .component("home", {
        templateUrl: 'home/home.template.html',
        controller: function HomeController(){
            var vm = this;
            vm.games = {
                '0' : 
                    {
                        'id' : '1',
                        'name' : 'Kingdomino'
                    },
                '1' : 
                    {
                        'id' : "2",
                        'name' : "Splendor"
                    }
            }
            console.log(vm.games);
        }
    }
    )