class Company{
    #name //private property
    #noOfEmp //private
    #CEO
    constructor(name,noOfEmp,CEO){
        this.#name=name
        this.#noOfEmp=noOfEmp
        this.#CEO=CEO
    }

    getCompanyDetail(){
        console.log(this.#getNameOfCEO())
        return`The name of the company is ${this.#name}. There are ${this.#noOfEmp} in the company. Chief Executive Officer(CEO) of this company is ${this.#CEO}.`
    }

    #getNameOfCEO(){
        return `Name of CEO of this company is ${this.#CEO}.`
    }

}

const company1 = new Company("IZEE Pvt. Ltd",5000,"Mahendra Singh Thakur")
const company2 = new Company("Vikash Farm Pvt. Ltd",2000,"Lakhan Singh Thakur")
const company3 = new Company("Boot Production Pvt. Ltd",1000,"Sher Singh Thankur")