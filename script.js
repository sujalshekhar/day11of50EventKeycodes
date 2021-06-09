const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
    <div class="key-values-container">
        <div class="key">
            <p>event.key</p>
            <div class="event">
                <h3>${e.key === " " ? "Space" : e.key}</h3>
            </div>
        </div>
    
        <div class="key">
            <p>event.keyCode</p>
            <div class="event">
                <h3>${e.keyCode}</h3>
            </div>
        </div>
    
        <div class="key">
            <p>event.code</p>
            <div class="event">
                <h3>${e.code}</h3>
            </div>
        </div>
    </div>
    `;
});
