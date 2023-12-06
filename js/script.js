const buttons = document.querySelectorAll('.button');

// codigo js para baixar
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = 'https://drive.google.com/file/d/10b9DJox84W1zUcJk1sJ71OMaQ8voqLGB/view?usp=drive_link';
        a.download = 'AuTasks-v1.0.0.apk';
        a.click();
    })
});
