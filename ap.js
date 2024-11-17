document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    if (name === "" || age === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

var resultText = `Hola, ${name}. Tienes ${age} años.`;
    document.getElementById('result').textContent = resultText;
});