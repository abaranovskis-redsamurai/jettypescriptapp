define(["require", "exports", "knockout", "ojs/ojinputtext", "ojs/ojlabel", "ojs/ojbutton"], function (require, exports, ko) {
    "use strict";
    var DashboardViewModel = /** @class */ (function () {
        function DashboardViewModel() {
            var self = this;
            self.txtVal = ko.observable("Hello");
            self.txtVal.subscribe(function (data) {
                console.log(self.txtVal());
            });
            self.callAction = function (event) {
                console.log(greeter(new Greeter("world")));
            };
            function greeter(person) {
                return person.greet();
            }
        }
        return DashboardViewModel;
    }());
    ;
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    return new DashboardViewModel();
});
//# sourceMappingURL=dashboard.js.map