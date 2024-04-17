// frontend/script.js
async function evaluateCode() {
    const code = document.getElementById('code').value;

    if (!code) {
        alert('Please provide some JavaScript code to evaluate.');
        return;
    }

    const response = await fetch('/evaluate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
    });

    const data = await response.json();
    document.getElementById('output').textContent = `${data.code}\n\n${data.output}`;
}
