function setcampus(onoroff) {
    document.querySelector("#connect").setAttribute("data-campus", `${onoroff}campus`);
    return false; // Links don't trigger if onclick() returns false
}

function setplatform(plat) {
    document.querySelector("#off-campus").setAttribute("data-platform", plat);
    return false;
}