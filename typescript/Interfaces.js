var KpmgEmp = /** @class */ (function () {
    function KpmgEmp() {
    }
    KpmgEmp.prototype.WorkHoursClause = function () {
        console.log("".concat(this.EmpName, " should work for 8hrs a day for 5 days a week"));
    };
    KpmgEmp.prototype.CheckInTimeClause = function () {
        console.log("".concat(this.EmpName, " should check-in to the office by ").concat(this.ShiftSatartTime));
    };
    return KpmgEmp;
}());
var Aishwarya = new KpmgEmp();
Aishwarya.EmpId = 1001;
Aishwarya.EmpName = "Aishwarya M N";
Aishwarya.Designation = "Analyst";
Aishwarya.ShiftSatartTime + "9.30 A M";
Aishwarya.WorkHoursClause();
Aishwarya.CheckInTimeClause();
