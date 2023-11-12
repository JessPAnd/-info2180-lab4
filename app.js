document.addEventListener("DOMContentLoaded", () => {
    let searchButton = document.querySelector(".btn");

    // adds listener to search button
    searchButton.addEventListener('click', function (element){
        element.preventDefault();
        var searchQuery = document.querySelector("#searcharea input[name='searchbar']").value.trim();
        searchQuery = encodeURI(searchQuery);
        // fetch url
        fetch(`http://localhost:8080/info2180-lab4/superheroes.php?query=${searchQuery}`, {method : 'GET'})
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
            if (data.trim() === "") {
                // displays superhero not found if empty string
                document.getElementById('result').innerHTML = "Superhero not found";
            } else {
                // if data is a single superhero format it to be displayed in the specified way
                let lines = data.split("|||");
                if (lines.length > 2) {
                    let resultHTML = "";
                    resultHTML += `<h3>${lines[0]}</h3>`;
                    resultHTML += `<h4>${lines[1]}</h4>`;
                    resultHTML += `<p>${lines.slice(2).join("\n")}</p>`;
                    document.getElementById('result').innerHTML = resultHTML;
                } else {
                    // if data is a list of superheroes
                    document.getElementById('result').innerHTML = data;
                }
            }
        })
        .catch(error => 
        {
            console.log(error);
        })
    })    
});
