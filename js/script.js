const buttons = document.querySelectorAll('.button');

// codigo js para baixar
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = 'file/apk.apk';
        a.download = 'apk.apk';
        a.click();
    })
});