const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = 'file/apk.apk';
        a.download = 'apk.apk';
        a.click();
    })
});