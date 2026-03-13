/**
 * Kontaktivormi käsitlemise skript.
 * Kasutab Formspree API-t sõnumite saatmiseks ilma back-endita.
 */

const form = document.getElementById("my-form");
const status = document.getElementById("form-status");

if (form) {
    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Takistab lehe ümberlaadimist
        
        const data = new FormData(event.target);
        
        // Näitame kasutajale, et saatmine on pooleli
        status.style.display = "block";
        status.innerHTML = "Saadan...";
        status.style.color = "#334155";

        // Saadame andmed Formspree serverisse
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                // Eduka saatmise korral puhastame vormi
                status.innerHTML = "Aitäh! Sinu teade on saadetud.";
                status.style.color = "#1f4e5a";
                form.reset(); 
            } else {
                // Vigade käsitlemine (nt vale konfiguratsioon)
                status.innerHTML = "Oih! Tekkis viga. Proovi hiljem uuesti.";
                status.style.color = "red";
            }
        }).catch(error => {
            // Võrguvead (nt puudub internetiühendus)
            status.innerHTML = "Võrguviga. Kontrolli ühendust.";
            status.style.color = "red";
        });
    });
}

/**
 * Logide tsentreerimine ja animatsioonide lisamine on tehtud CSS-is,
 * kuid siia saab lisada tulevikus dünaamilisi efekte.
 */