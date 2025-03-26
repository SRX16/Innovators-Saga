function checkAnswer() {
    const userAnswer = document.getElementById('userCode').value.trim();

    // Regular expressions for checking correct Java structure
    const classRegex = /public\s+class\s+\w+\s*\{/;
    const mainMethodRegex = /public\s+static\s+void\s+main\s*\(\s*String\s*\[\s*\]\s*args\s*\)\s*\{/;
    const printStatementRegex = /System\.out\.println\s*\(\s*"Welcome to Code Quest!"\s*\)\s*;/;

    if (classRegex.test(userAnswer) && mainMethodRegex.test(userAnswer) && printStatementRegex.test(userAnswer)) {
        document.getElementById('congratulations').style.display = 'block';
        increaseProgress();
        setTimeout(() => {
            window.location.href = 'level2.html'; // Proceed to next level
        }, 2000);
    } else {
        alert('Incorrect Code, Try again!!');
    }
}

function increaseProgress() {
    let bar = document.getElementById("progressBar");
    bar.value = Math.min(bar.value + 10, 100);
}
