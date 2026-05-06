function show(page) {
    const main = document.getElementById("main");

    if (page === "dashboard") {
        main.innerHTML = "<h1>Dashboard</h1><p>System overview loaded.</p>";
    }

    if (page === "macros") {
        main.innerHTML = "<h1>Macros</h1><button onclick='createMacro()'>New Macro</button>";
    }

    if (page === "timeline") {
        main.innerHTML = "<h1>Timeline Editor</h1><div id='timeline'></div>";
    }

    if (page === "blocks") {
        main.innerHTML = "<h1>Macro Blocks</h1><p>Drag & drop logic system (coming next layer)</p>";
    }

    if (page === "settings") {
        main.innerHTML = "<h1>Settings</h1><p>Configuration panel</p>";
    }
}

function createMacro() {
    let macros = JSON.parse(localStorage.getItem("macros") || "[]");
    macros.push({ name: "New Macro", events: [] });
    localStorage.setItem("macros", JSON.stringify(macros));

    alert("Macro created");
}
