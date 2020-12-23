var get = function(url, success, error){
    var xhr = new window.XMLHttpRequest()

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            if(xhr.status === 200){
                success(xhr.responseText)
            }
            else {
                error(xhr)
            }
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}

var getPost = function(success, error) {
    get('https://jsonplaceholder.typicode.com/users', function(response){
        var users = JSON.parse(response)
        get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id, function(response){
            var posts = JSON.parse(response)
            success(posts)
        }, function(e){
            error('Erreur Ajax', e)
        })
    }, function(e){
        error('Erreur Ajax', e)
    })
}

getPost(function(posts){
    console.log('Le premier article', posts[0])
}, function(error){
    console.error(error)
})