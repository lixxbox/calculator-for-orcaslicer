// Dialoge und Buttons referenzieren
const dialogs = document.querySelectorAll('dialog');
const openDialogButtons = document.querySelectorAll('.openDialog');
const closeDialogButtons = document.querySelectorAll('.closeDialog');

// Funktion zum Öffnen eines Dialogs
function openDialog(dialogId) {
    document.documentElement.classList.remove('modal-is-closing');
    document.documentElement.classList.add('modal-is-opening');
    document.documentElement.classList.add('modal-is-open');
    const dialog = document.getElementById(dialogId);
    if (dialog) {
        dialog.showModal();
    }
}

// Funktion zum Schließen eines Dialogs
function closeDialog(dialogId) {
    document.documentElement.classList.remove('modal-is-opening');
    document.documentElement.classList.remove('modal-is-open');
    document.documentElement.classList.add('modal-is-closing');
    const dialog = document.getElementById(dialogId);
    if (dialog) {
        dialog.close();
    }
    document.documentElement.classList.remove('modal-is-closing');
}

// Eventlistener für Klick auf "Öffnen" Buttons/Links hinzufügen
openDialogButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Um die Standardaktion des Links zu verhindern
        const dialogId = this.getAttribute('data-dialog');
        openDialog(dialogId);
    });
});

// Eventlistener für Klick auf "Schließen" Buttons/Links hinzufügen
closeDialogButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        event.preventDefault(); // Um die Standardaktion des Links zu verhindern
        const dialogId = this.closest('dialog').id;
        closeDialog(dialogId);
    });
});
