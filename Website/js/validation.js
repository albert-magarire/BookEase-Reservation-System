function validateZipCode() {
    var zip = document.getElementById("zip").value;
    if (!/^\d{5}$/.test(zip)) {
        alert("Please enter a valid 5-digit zip code.");
        return false;
    }
    return true;
}

function NotKnownYet() {
    if (!/^\d{5}$/.test(zip)) {
        alert("Value Must be Only 5 Numeric Values");
        return false;
    }
    return true;
}
