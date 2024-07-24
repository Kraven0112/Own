class Company {
  constructor(name, ceo, noOfEmp) {
    this.name = name
    this.ceo = ceo
    this.noOfEmp = noOfEmp
  }

  getDetail() {
    return `The name of the compnay is ${this.name}. There are ${this.noOfEmp} in this company. The CEO of this company is ${this.ceo}.`
  }

  get companyDetail() {
    return `The name of the compnay is ${this.name}. There are ${this.noOfEmp} in this company. The CEO of this company is ${this.ceo}.`
  }

  set setDetail(value){
        const[name,ceo,noOfEmp] = value.split(' ')
        this.name = name
        this.ceo=ceo
        this.noOfEmp = noOfEmp
  }
}

const company1 = new Company("SSK Pvt Ltd", "Shekhar Sharma", 5000)

//setting value in set method 
company1.setDetail="SSK Shekhar 5000"

