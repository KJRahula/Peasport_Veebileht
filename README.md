# Peasport Professional Web Project

## Overview
This repository contains the official website for Peasport, a professional sports psychology company. The project serves as a production-ready platform designed to facilitate communication between athletes, coaches, and psychological specialists.

## Key Features
* Dynamic Content Loading: Professional biographies and team data are managed through a custom JavaScript implementation that fetches information from structured text files.
* Social Media Integration: The interface includes a real-time Instagram feed powered by the Instagram Graph API to ensure current social content is always visible.
* Integrated Inquiry System: Client communication is handled via a secure contact form integrated with the Formspree API.
* Modern User Interface: The visual design utilizes modern CSS techniques, including glassmorphism effects and fully responsive layouts to support various device types.

## Technical Stack
* Frontend: HTML5, CSS3, and Vanilla JavaScript.
* Services: Formspree API for email handling and Instagram Graph API for social media synchronization.

## Development Note
This project was developed using a vibe-coding approach. While the core architecture, logic, and final integration were directed by the developer, significant portions of the implementation were assisted by artificial intelligence to streamline the development process and focus on the overall vision.

## Configuration
To ensure security, all sensitive API keys are excluded from version control via the .gitignore file. To run the project locally, a config.js file must be created in the root directory with the following structure:

const CONFIG = {
    FORMSPREE_URL: "your_formspree_endpoint_here",
    INSTA_TOKEN: "your_instagram_graph_api_token_here"
};

---

# Peasport professionaalne veebiprojekt

## Ülevaade
Käesolev hoidla sisaldab spordipsühholoogia ettevõtte Peasport ametlikku veebilahendust. Tegemist on reaalseks kasutuseks loodud platvormiga, mille eesmärk on viia kokku sportlased, treenerid ja psühholoogilise ettevalmistuse spetsialistid.

## Peamised funktsionaalsused
* Dünaamiline sisu laadimine: Spetsialistide biograafiad ja meeskonna andmed kuvatakse JavaScripti lahenduse abil, mis loeb infot struktureeritud tekstifailidest.
* Sotsiaalmeedia lõiming: Kasutajaliidesesse on integreeritud reaalajas uuenev Instagrami voog, mis kasutab sisu kuvamiseks Instagram Graph API-t.
* Kontaktisüsteem: Klientide päringud edastatakse turvaliselt läbi Formspree API teenuse.
* Kaasaegne disain: Visuaalne keel rakendab modernseid CSS-võtteid, sealhulgas klaasiefekti (glassmorphism) ning täielikku responsiivsust, tagamaks kasutusmugavuse kõigis seadmetes.

## Tehnoloogiad
* Kasutajaliides: HTML5, CSS3 ja JavaScript.
* Teenused: Formspree API vormide haldamiseks ja Instagram Graph API sotsiaalmeedia sünkroniseerimiseks.

## Märkus arendusprotsessi kohta
Käesolev projekt on valminud vibe-coding meetodil. Kuigi süsteemi arhitektuur, loogika ja lõplik integreerimine on teostatud arendaja poolt, on rakendamisel kasutatud olulisel määral tehisintellekti abi, et tõhustada tööprotsessi ja keskenduda projekti üldisele visioonile.

## Seadistamine
Turvakaalutlustel on kõik tundlikud API-võtmed versioonihaldusest .gitignore faili abil välja jäetud. Projekti lokaalseks käivitamiseks tuleb luua juurkataloogi config.js fail järgmise struktuuriga:

const CONFIG = {
    FORMSPREE_URL: "teie_formspree_aadress",
    INSTA_TOKEN: "teie_instagram_api_võti"
};
