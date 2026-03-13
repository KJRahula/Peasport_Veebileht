/**
 * loader.js
 * See skript loeb tekstifailist info ja loob HTML elemendid,
 * toetades nüüd ka mitut paragrahvi.
 */
async function loadTeamFromTxt() {
    const container = document.getElementById('team-container');
    if (!container) return;

    try {
        const response = await fetch('assets/data/kirjeldused.txt');
        const text = await response.text();

        // Jagame teksti blokkideks tühja rea järgi
        const blocks = text.trim().split(/\n\s*\n/);

        container.innerHTML = blocks.map(block => {
            const lines = block.split('\n').map(l => l.trim());
            
            if (lines.length < 4) return ''; 

            const name = lines[0];
            const title = lines[1];
            const imagePath = lines[2];
            
            // Muudatus: võtame kõik read alates neljandast ja mähime need <p> tagidesse
            const bioHtml = lines.slice(3)
                .filter(line => line.length > 0) // Eemaldame tühjad read bloki sees
                .map(paragraph => `<p style="margin-bottom: 15px;">${paragraph}</p>`)
                .join('');

            return `
                <div class="team-member-card">
                    <div class="member-sidebar">
                        <img src="${imagePath}" alt="${name}" class="member-img">
                        <div class="member-info">
                            <h3>${name}</h3>
                            <p class="degree">${title}</p>
                            <div class="member-socials">
                                <a href="#" class="social-icon">LinkedIn</a>
                                <a href="#" class="social-icon">IG</a>
                            </div>
                        </div>
                    </div>
                    <div class="member-content">
                        ${bioHtml}
                    </div>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error("Viga:", error);
        container.innerHTML = "<p>Andmeid ei saanud laadida.</p>";
    }
}

document.addEventListener('DOMContentLoaded', loadTeamFromTxt);