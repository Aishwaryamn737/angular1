var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Details = function () {
        var details = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            details[_i] = arguments[_i];
        }
        console.log("Employee details are : ");
        for (var i = 0; i < details.length; i++) {
            console.log(details[i]);
        }
    };
    Employee.prototype.AssignWork = function (work) {
        this.Work = work;
        console.log(this.Name + "gets promotion based on the performance");
    };
    Employee.prototype.Assignincrements = function (increments) {
        this.Increments = increments;
        console.log(this.Name + " gets increment of ");
        if (this.Salary > 70000) {
            console.log("INR 10000");
        }
        else {
            console.log("INR 5000");
        }
    };
    return Employee;
}());
var Aish = new Employee();
Aish.Name = "Aishu";
Aish.Email = "aish@799.com";
Aish.Designation = "Analyst";
Aish.EmployID = "125070";
Aish.Details("Aishu", "aish@7999.com", "Analyst", "125070", "Aishu gets promoted based on promotion");
