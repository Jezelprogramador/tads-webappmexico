document.getElementById("greenRange").addEventListener("input", function () {
    let color = this.value;
    document.getElementById("greenBox").style.backgroundColor = color;
    document.getElementById("greenValue").textContent = color.toUpperCase();
});

document.getElementById("redRange").addEventListener("input", function () {
    let color = this.value;
    document.getElementById("redBox").style.backgroundColor = color;
    document.getElementById("redValue").textContent = color.toUpperCase();
});
