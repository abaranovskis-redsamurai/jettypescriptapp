import * as ko from "knockout";
import "ojs/ojinputtext";
import "ojs/ojlabel";
import "ojs/ojbutton";

class DashboardViewModel {
    public txtVal: KnockoutObservable<string>;
    public callAction: Function;

    constructor() {
        let self = this;
        
        self.txtVal = ko.observable("Hello");

        self.txtVal.subscribe(function (data) {
            console.log(self.txtVal());
        });

        self.callAction = (event: object) => {
           console.log(greeter(new Greeter("world")));
        }

        function greeter(person : Greeter) {
            return person.greet();
        }
    }
};

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

export = new DashboardViewModel();