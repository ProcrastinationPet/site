const buttons = document.querySelectorAll('.button');

// codigo js para baixar
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = 'https://drive.google.com/file/d/1ymQCrBbJ5TOAuzRkWuRm5L3Gi9aV8r8t/view?usp=sharing';
        a.download = 'AuTasks-v0.3.0-alpha.apk';
        a.click();
    })
});
