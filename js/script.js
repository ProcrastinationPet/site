const buttons = document.querySelectorAll('.button');

// codigo js para baixar
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = 'https://drive.google.com/file/d/11Aryk4odUmL7dwkSwKy1Nfmw7u5ytse0/view?usp=sharing';
        a.download = 'AuTasks-v0.9.2.apk';
        a.click();
    })
});
