class Person{
    public Name:string;
    public Age:number;
    public Email:string;
    private Secrets:string[];
    protected Income:number;

    public Eat(...food:string[]){
        console.log(this.Name + " likes to eat:");
        for(var i=0; i<food.length; i++){
            console.log(food[i]);
        }
    }

    public AssignIncome(income:number){
        this.Income = income;
    }
}

class ITOfficer extends Person{
    public PrintTotalRefund(){
        console.log(this.Name = "has received a total refund of : ");
        if(this.Income > 300000){
            console.log("INR 10000");
        }
        else{
                console.log("INR 5000");
        }
    }
}

var auditor = new ITOfficer();
auditor.Name = "Aishwarya";
auditor.Eat("Chapathi","Sabji","Dessert");
auditor.AssignIncome(10000000);
auditor.PrintTotalRefund();

//Constructing real person
var Jon = new Person();
Jon.Name = "jon";
Jon.Email = "jon@123.com";
Jon.Eat("Junk foods","vegetables");

var Don = new Person();
Don.Name = "Don";
Don.Email = "don@123.com";
Don.Eat("Ice cream","vegetables");