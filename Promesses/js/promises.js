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

var getPost = function() {
    return get('https://jsonplaceholder.typicode.com/users').then(function(response){
        var users = JSON.parse(response)
        return get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id)
    }).then(function(response){
        var posts = JSON.parse(response)
        return posts
    })
}

getPost().then(function(posts){
    console.log(posts[0])
}).catch(function(error){
    console.log(error)
}).then(function(){
    console.log('Fin des requetes Ajax')
})

/**
 * Promesses :
 * 
 * let p = new Promise(function(resolve, reject){
 * ..........
 * ..........
 * resolve(...)
 * })
 * 
 * 
 * p.then(function(response){...})
 * .then(function(){...})
 * .then(function(){...})
 * .catch(function(response){...})
 */