var getHttpRequest = function() {
    var httpRequest = false;

    if (window.XMLHttpRequest){
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType){
            httpRequest.overrideMimeType('text/xml');
        }
    }
    else if (window.ActiveXObject){
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {}
        }
    }

    if (!httpRequest) {
        alert ("Abandon :{ Impossible de créer une instance XMLHTTP");
        return false;
    }

    return httpRequest;
}
var links = document.querySelectorAll('.meteo')
var result = document.getElementById('result')

for (var i = 0; i < links.length; i++) {
    var link = links[i]
    link.addEventListener('click', function(e){
        e.preventDefault()
        result.innerHTML('Chargement...')
        var httpRequest = getHttpRequest()
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4){
                result.inerHTML = httpRequest.responseText
            }
        }
        httpRequest.open('GET', this.getAttribute('href'), true)
        httpRequest.send()
    })
}

