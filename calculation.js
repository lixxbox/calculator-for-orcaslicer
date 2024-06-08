function handleResult(resultElement, result) {
    if (result === null || result === undefined || isNaN(result)) {
        resultElement.innerText = "Please check values..";
        handleDisabled(resultElement, true);
    } else {
        resultElement.innerText = result;
        handleDisabled(resultElement, false);
    }
}

function handleDisabled(resultElement, isDisabled) {
    resultElement.closest("div[role='group']").querySelector("select").disabled = isDisabled;
    resultElement.closest("div[role='group']").querySelector("button").disabled = isDisabled;
}

function calculateFlowRate() {
    var flowrate = parseFloat(document.getElementById("flowrate").value);
    var modifier = parseFloat(document.getElementById("modifier").value);

    var resultElement = document.getElementById("flowrateResult");
    var result = null;

    result = flowrate * (100 + modifier) / 100;
    handleResult(resultElement, result);

    // if (isNaN(flowrate) || isNaN(modifier)) {
    //     handleResult(resultElement, result);
    // } else {
    //     result = flowrate * (100 + modifier) / 100;
    //     handleResult(resultElement, result);
    // }
}

function calculatePressureAdvance() {
    var PAstart = parseFloat(document.getElementById("PAstart").value);
    var PAstep = parseFloat(document.getElementById("PAstep").value);
    var PAmeasurement = parseFloat(document.getElementById("PAmeasurement").value);

    var resultElement = document.getElementById("paResult");
    var result = null;

    result = PAmeasurement * PAstep + PAstart;
    handleResult(resultElement, result);

    // if (isNaN(PAmeasurement) || isNaN(PAstep) || isNaN(PAstart)) {
    //     handleResult(resultElement, result);
    // } else {
    //     result = PAmeasurement * PAstep + PAstart;
    //     handleResult(resultElement, result);
    // }
}

function calculateRetraction() {
    var retractStart = parseFloat(document.getElementById("retractStart").value);
    var retractMeasure = parseFloat(document.getElementById("retractMeasure").value);
    var retractStep = parseFloat(document.getElementById("retractStep").value);

    var resultElement = document.getElementById("retractResult");
    var result = null;


    result = retractMeasure * retractStep + retractStart;
    handleResult(resultElement, result);

    // if (isNaN(retractMeasure) || isNaN(retractStep) || isNaN(retractStart)) {
    //     handleResult(resultElement, result);
    // } else {
    //     result = retractMeasure * retractStep + retractStart;
    //     handleResult(resultElement, result);
    // }
}

function calculateMaxFlow() {
    var maxflowStart = parseFloat(document.getElementById("maxflowStart").value);
    var maxflowHeight = parseFloat(document.getElementById("maxflowHeight").value);
    var maxflowStep = parseFloat(document.getElementById("maxflowStep").value);

    var resultElement = document.getElementById("maxflowResult");
    var result = null;

    result = maxflowStart + (maxflowHeight * maxflowStep);
    handleResult(resultElement, result)
}

function setExtruderType() {
    if (document.getElementById('dde').checked) {
        var paStep = 0.002
    } else {
        var paStep = 0.02
    }
    document.getElementById('PAstep').value = paStep;
    document.getElementById('PAstep').placeholder = paStep;
    calculatePressureAdvance()
}

setExtruderType();
calculateFlowRate();
calculatePressureAdvance();
calculateRetraction();
calculateMaxFlow();
