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

// Ping endpoint to check server status
async function pingServer() {
    const response = await fetch('/ping');
    const result = await response.json();

    if (result.botInfo) {
        console.log('Server is running. Bot info:', result.botInfo);
    } else {
        console.error('Failed to ping server:', result.error);
    }
}

// Call pingServer function to check server status on page load
pingServer();
