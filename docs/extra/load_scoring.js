/*
 * see https://github.com/bitem-heg-geneve/ebiodiv-matching-frontend/tree/master/create_scoring
 */
function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
};

async function downloadScoring(url) {
    const response = await fetch(url);
    return await response.json()
}

function addColumn(document, tr, data) {
    td = document.createElement("td");
    if (data !== undefined) {
        td.innerHTML = data;
    }
    tr.appendChild(td);
}

docReady(async function() {
    let table = document.getElementById("scoring-table");
    let scoring = await downloadScoring("https://prod.ebiodiv.org/scoring.json");
    for (const field of scoring) {
        const tr = document.createElement("tr");
        addColumn(document, tr, field.order);
        addColumn(document, tr, field.name);
        addColumn(document, tr, field.GBIF_fields.join(", "));
        addColumn(document, tr, field.weight);
        addColumn(document, tr, field.description);
        table.appendChild(tr);
    }
});
