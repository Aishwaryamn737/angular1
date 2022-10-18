interface IEmpContract{
    WorkHoursClause();
    CheckInTimeClause();

}

class KpmgEmp implements IEmpContract{
    public EmpId : number;
    public EmpName:string;
    public Designation : string;
    public ShiftSatartTime: string;

    WorkHoursClause(){
        console.log(`${this.EmpName} should work for 8hrs a day for 5 days a week`);
    }
    CheckInTimeClause() {
        console.log(`${this.EmpName} should check-in to the office by ${this.ShiftSatartTime}`);
    }

}

var Aishwarya = new KpmgEmp();
Aishwarya.EmpId = 1001;
Aishwarya.EmpName = "Aishwarya M N";
Aishwarya.Designation = "Analyst";
Aishwarya.ShiftSatartTime + "9.30 A M";
Aishwarya.WorkHoursClause();
Aishwarya.CheckInTimeClause();