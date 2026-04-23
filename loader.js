/**
 * loader.js
 * See skript loeb tekstifailist info ja loob HTML elemendid,
 * toetades biograafiat ja eraldatud joonega firma andmeid (---).
 */
async function loadTeamFromTxt() {
    const container = document.getElementById('team-container');
    if (!container) return;

    try {
        const response = await fetch('assets/data/Kirjeldused.txt');
        const text = await response.text();
        const blocks = text.trim().split(/\n\s*\n/);

        container.innerHTML = blocks.map(block => {
            const lines = block.split('\n').map(l => l.trim());
            if (lines.length < 4) return ''; 

            const name = lines[0];
            const title = lines[1];
            const imagePath = lines[2];
            
            let bioLines = [];
            let companyLines = [];
            let isCompanyInfo = false;

            // Sorteerime read: mis läheb bio alla ja mis firma info alla
            for (let i = 3; i < lines.length; i++) {
                if (lines[i] === '---') {
                    isCompanyInfo = true;
                    continue;
                }
                
                if (lines[i].length > 0) {
                    if (isCompanyInfo) {
                        companyLines.push(lines[i]);
                    } else {
                        bioLines.push(lines[i]);
                    }
                }
            }

            const bioHtml = bioLines
                .map(paragraph => `<p style="margin-bottom: 10px;">${paragraph}</p>`)
                .join('');

            // Kui firma andmeid eksisteerib, loome eraldusjoone ja teksti
            let companyHtml = '';
            if (companyLines.length > 0) {
                const companyTextHtml = companyLines
                    .map(line => `<p>${line}</p>`)
                    .join('');
                
                companyHtml = `
                    <div class="member-company-info">
                        <hr class="member-company-divider">
                        ${companyTextHtml}
                    </div>
                `;
            }

            return `
                <div class="team-member-card">
                    <div class="member-float-box">
                        <img src="${imagePath}" alt="${name}" class="member-img">
                    </div>
                    
                    <h3 class="member-name">${name}</h3>
                    <span class="degree">${title}</span>
                    <div class="member-content">
                        ${bioHtml}
                        ${companyHtml}
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