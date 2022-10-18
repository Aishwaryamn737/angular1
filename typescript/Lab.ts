class Employee{
    public Name:string;
    public Email:string;
    public Designation:string;
    public EmployID:string;
    protected Salary : number;
    public Work : string;
    public Increments : number;

    public Details(...details){
        console.log("Employee details are : ");
        for(var i =0; i <details.length; i++){
            console.log(details[i]);
        }
    }

    public AssignWork(work:string){
        this.Work = work;
        console.log(this.Name + "gets promotion based on the performance" );
    }
    public Assignincrements(increments:number){
        this.Increments = increments;
        console.log(this.Name +" gets increment of ");
        if(this.Salary>70000){
            console.log("INR 10000");
        }else{
            console.log("INR 5000");
        }
    }
}

var Aish = new Employee();
Aish.Name = "Aishu";
Aish.Email = "aish@799.com";
Aish.Designation = "Analyst";
Aish.EmployID = "125070";
Aish.Details("Aishu", "aish@7999.com","Analyst","125070","Aishu gets promoted based on performance");