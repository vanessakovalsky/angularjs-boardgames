angular.module("contact",[])
    .component("contact", {
        templateUrl: 'contact/contact.template.html',
        controller: function ContactController(){
            var vm = this;
            vm.entete = {
                titre: "Contact",
                texte: "N'hésitez pas à nous contacter",
                bouton: "Participez à notre aventure"
            };
        }
    }
    )