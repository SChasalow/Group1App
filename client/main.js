
Session.set("counter", 0);

Template.clicker.events(
	{"click button#clicker": 
		function(event){
			console.log("You pushed it")
			Session.set("counter", 1+Session.get("counter"));
		}

	}
);

Template.clicker.helpers({
	theCount: function(){

			return Session.get("counter");
		}

	}
);




Template.exit.events(
	{"click button#exit": 
		function(event){
			console.log("You pushed exit")
			Session.set("counter", -1+Session.get("counter"));

			if(Session.get("counter") <= 0){
			Session.set("counter", 0);
			
			}
		}

	}
);


