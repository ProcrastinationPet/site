const buttons = document.querySelectorAll('.button');

// codigo js para baixar
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = '../file/AuTasks-v0.2.0-alpha.apk';
        a.download = 'AuTasks-v0.2.0-alpha.apk';
        a.click();
    })
});