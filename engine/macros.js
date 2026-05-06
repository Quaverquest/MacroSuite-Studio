function saveMacro(name, data) {
    let macros = JSON.parse(localStorage.getItem("macros") || "{}");
    macros[name] = data;
    localStorage.setItem("macros", JSON.stringify(macros));
}

function loadMacro(name) {
    let macros = JSON.parse(localStorage.getItem("macros") || "{}");
    return macros[name];
}
