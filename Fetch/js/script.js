const getUsers = async function(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (response.ok){
            let data = await response.json()
            console.log(data)
        }
        else {
            console.error('Retour du serveur : ', response.status)
        }
    } catch (e) {
        console.log(e)
    }
}

const insertPost = async function(data){
    let request = new Request('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let response = await fetch(request)
    let responseData = await response.json()
}

insertPost({
    name: 'Jean', 
    age: 29
})