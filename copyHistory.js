var flowHistory = [];
var paHistory = [];
var retractHistory = [];
var maxflowHistory = [];

async function copyContent(historyArray) {
    try {
        button = event.target;
        buttonIcon = button.querySelector(".material-symbols-outlined");
        previousElement = button.previousElementSibling
        let value = previousElement.value;
        await navigator.clipboard.writeText(value);
        console.log('Content copied to clipboard:', value);
        addHistory(value, historyArray);

        buttonIcon.innerText = "inventory";
        button.disabled = true;
        window.setTimeout(function () {
            buttonIcon.innerText = "content_paste";
            button.disabled = false
        }, 750);

    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

function addHistory(value, array, previousElement) {
    var history = array;
    let now = new Date()
    timestamp = now.toISOString().split('.')[0].replace("T", " ")

    history.push({
        key: timestamp,
        value: value
    })
    console.log("Add to History:", timestamp, value, history)
    updateSelectOptions(history, previousElement);
}

function updateSelectOptions(array) {
    var optgroup = previousElement.querySelector('optgroup[label="History"]');

    // Leere die vorhandenen Optionen innerhalb des optgroup-Tags
    optgroup.innerHTML = '';

    // Füge neue Optionen hinzu
    array.forEach(item => {
        var option = document.createElement('option');
        option.textContent = item.value + " - [" + item.key + "]";
        option.setAttribute('value', item.value);
        option.setAttribute('timestamp', item.key);

        // Füge die Option zum optgroup-Element hinzu
        optgroup.appendChild(option);
    });
}