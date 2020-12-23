var get = function(url){
    return new Promise(function(resolve, reject){

        var xhr = new window.XMLHttpRequest()

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(xhr.responseText)
                }
                else {
                    reject(xhr)
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    })
}

var catchError = function(error){
    console.error('Erreur Ajax', e)
}

var getPosts = async function() {
    try {
        var response = await get('https://jsonplaceholder.typicode.com/users')
        var users = JSON.parse(response)
        response = await get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id)
        var posts = JSON.parse(response)
    } catch (e){
        console.log('Il y a eu un problème', e)
    }
    
    return posts
}

var getFirstPost = async function(){
    var posts = await getPosts()
    return posts[0]
}

var demo = async function(){
    var arr = await Promise.all([getPosts(), getFirstPost()])
    console.log(arr)
}

demo()
getPosts()