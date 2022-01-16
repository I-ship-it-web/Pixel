

// Functions to make the grid
function makeGrid() {
    const h = document.getElementById('inputHeight').value;
    const w = document.getElementById('inputWidth').value;
    const table = document.getElementById('pixelCanvas');
    
    //Loop for creating the grid, creates tables, by 0 remove it again
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
// Function to fill the grid with colors
function setColorFul() {
    const c = document.getElementById('colorPicker').value;
    return c;
}
