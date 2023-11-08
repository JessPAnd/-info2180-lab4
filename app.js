document.addEventListener("DOMContentLoaded", () => {
    let searchButton = document.querySelector(".searchButton");
    const search = searchButton.querySelector(".btn");

    //Adding listener to search button
    search.addEventListener('click', function (element){
        element.preventDefault();
        // Fetch url
        fetch("http://localhost:8080/info2180-lab4/superheroes.php")
            .then(response => {
                if (response.ok){
                    return response.text()
                }
                else{
                    return Promise.reject("Error")
                }
            })
            .then(data => 
            {
                alert(data);
            })
            .catch(error => 
            {
                console.log(error);
            })
        
    })
});
