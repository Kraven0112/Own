const username = "Sushil"
const userAge = 20

function main()
{
    const x=20
    const y=30
        function chain()
        {
            console.log(username)
            console.log(userAge)
            console.log(x)
            console.log(y)
        }
        return chain
    
}
console.dir(main())


//chain()  function has closure of global variable  and main() function