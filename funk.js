const form = document.getElementById("my-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    status.style.display = "block";
    status.innerHTML = "Saadan...";
    status.style.color = "#334155";

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Aitäh! Sinu teade on saadetud.";
            status.style.color = "#1f4e5a";
            form.reset(); 
        } else {
            status.innerHTML = "Oih! Tekkis viga. Kontrolli Formspree seadeid.";
            status.style.color = "red";
        }
    }).catch(error => {
        status.innerHTML = "Võrguviga. Kontrolli ühendust.";
        status.style.color = "red";
    });
});