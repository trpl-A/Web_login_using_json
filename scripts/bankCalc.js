// BANK CALCULATIONS

// default values
const defaultValues = {
    "deposit-value": 1000,
    "withdrawal-value": 100,
    "send-value": 50,
    "balance": 1000
}

let balance = 0

let depositSpace = document.getElementById("show-deposit")
let withdrawSpace = document.getElementById("show-withdrawals")
let sendSpace = document.getElementById("show-sent-money")
let balanceSpace = document.getElementById("show-balance")


depositSpace.innerText = defaultValues["deposit-value"]
withdrawSpace.innerText = defaultValues["withdrawal-value"]
sendSpace.innerText = defaultValues["send-value"]
balanceSpace.innerText = defaultValues["balance"]

function show1() {
    let deposit = document.getElementById("deposit").value

    let deposit1 = document.getElementById("show-deposit")
    console.log(deposit)
    deposit1.innerText = defaultValues["deposit-value"]
}

// CALCULATIONS
function updateDeposit() {
    // input
    let deposit = Number.parseInt(document.getElementById("deposit").value)

    // default
    let d = Number.parseInt(depositSpace.innerText)
    let b = Number.parseInt(balanceSpace.innerText)

    // calc
    d += deposit
    b += deposit

    // clear
    document.getElementById("deposit").value = ""


    // display
    depositSpace.innerText = d
    balanceSpace.innerText = b
}

function updateWithdraw() {
    // input
    let withdraw = Number.parseInt(document.getElementById("withdraw").value)


    // default
    let w = Number.parseInt(withdrawSpace.innerText)
    let b = Number.parseInt(balanceSpace.innerText)

    // calc
    w += withdraw
    b -= withdraw

    // clear
    document.getElementById("withdraw").value = ""

    // display
    withdrawSpace.innerText = w
    balanceSpace.innerText = b
}

function updateSend() {
    // input
    let send = Number.parseInt(document.getElementById("sent").value)

    // default
    let s = Number.parseInt(sendSpace.innerText)
    let b = Number.parseInt(balanceSpace.innerText)

    // calc
    s += send
    b -= send

    // clear
    document.getElementById("sent").value = ""

    // display
    sendSpace.innerText = s
    balanceSpace.innerText = b
}