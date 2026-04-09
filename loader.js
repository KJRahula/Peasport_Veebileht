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
        const blocks = text.trim().split(/\n\s*\n/);

        container.innerHTML = blocks.map(block => {
            const lines = block.split('\n').map(l => l.trim());
            if (lines.length < 4) return ''; 

            const name = lines[0];
            const title = lines[1];
            const imagePath = lines[2];
            
            const bioHtml = lines.slice(3)
                .filter(line => line.length > 0)
                .map(paragraph => `<p style="margin-bottom: 10px;">${paragraph}</p>`)
                .join('');

            return `
                <div class="team-member-card">
                    <div class="member-float-box">
                        <img src="${imagePath}" alt="${name}" class="member-img">
                    </div>
                    
                    <h3 class="member-name">${name}</h3>
                    <span class="degree">${title}</span>
                    <div class="member-content">
                        ${bioHtml}
                    </div>
                    <div style="clear: both;"></div>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error("Viga:", error);
    }
}
document.addEventListener('DOMContentLoaded', loadTeamFromTxt);