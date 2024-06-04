//closure of three functions under function

function grand()
{
    const username="Sushil"
    const userAge=20
    function parent()
    {
        const x = 20
        const y = 30
        console.log(username)
        console.log(userAge)

        function child()
        {
            console.log(x)
            console.log(y)
            console.log(username)
            console.log(userAge)
        }
        return child
    }
    return parent()
}
console.dir(grand())


// child() function has closure of both grand() and parent()  functions.