

// For the grid 
function makeGrid() {
    const h = document.getElementById('inputHeight').value;
    const w = document.getElementById('inputWidth').value;
    const table = document.getElementById('pixelCanvas');
    

    html = '';
    for (let i = 0; i < h; i++) {
        html += "<tr>";
        
        for (let j = 0; j < w; j++) {
            html += "<td onclick = 'this.style.backgroundColor = setColorFul()'></td>";
        }

        html += "</tr > ";
    }
    table.innerHTML = html;
    return false;
}
// For color
function setColorFul() {
    const c = document.getElementById('colorPicker').value;
    return c;
}
