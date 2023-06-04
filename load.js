


window.onload = function () {
    function load(){
        let breed = document.getElementById("breed").value
        document.getElementsByClassName("first")[0].style.display = "none"
        document.body.style.backgroundImage = "none"
        let second = document.getElementsByClassName("second")[0]
        second.style.display = "block"
        second.style.width = "320px"
        second.style.height = "320px"
        fetch("https://dog.ceo/api/breed/"+breed+"/images/random")
        .then(data => data.json())
        .then((data)=>{
            document.getElementById("target").src = data.message
        })
    }
    document.getElementById("submit").onclick = load;
}


