function getPartySize()
{
    let size = document.getElementById("partySize").value;
    let partyInfo = document.getElementsByClassName("get-party-information-wrapper")[0];
    partyInfo.innerHTML = "";
    for(let i = 0; i < size; i++)
    {
        let div = document.createElement('div');
        div.className="person-info";


        //break
        let personName = document.createElement('div');
        personName.className="person-name";

        let personPayment = document.createElement('div');
        personPayment.className="person-payment";


        //break
        let personNameText = document.createElement('label');
        personNameText.className="custom-field";

        let personPaymentText = document.createElement('label');
        personPaymentText.className="custom-field";



        // break
        let personNameInput = document.createElement('input');
        personNameInput.type="text";
        personNameInput.id="personInfo";
        personNameInput.setAttribute("required", "");

        let personNameSpan = document.createElement('span');
        personNameSpan.className="placeholder";
        personNameSpan.textContent="Name";

        let personPaymentInput = document.createElement('input');
        personPaymentInput.type="text";
        personPaymentInput.id="personInfo";
        personPaymentInput.setAttribute("required", "");

        let personPaymentSpan = document.createElement('span');
        personPaymentSpan.className="placeholder";
        personPaymentSpan.textContent="Payment"


        // break
        personNameText.append(personNameInput);
        personNameText.append(personNameSpan);

        personPaymentText.append(personPaymentInput);
        personPaymentText.append(personPaymentSpan);

        // break
        personName.append(personNameText);
        personPayment.append(personPaymentText);

        // break
        div.append(personName);
        div.append(personPayment);

        //break
        partyInfo.append(div);

    }
    let totalPrice = document.createElement('label');
    totalPrice.className="custom-field";

    totalPrice.innerHTML='<label class="custom-field">\n\t<input type="text" id="partySize" required>\n<span class="placeholder">Final Price</span>\n</label>'

    let enterBtn = document.createElement('button');
    enterBtn.onclick="calculate()";
    enterBtn.id="calculate-button";
    enterBtn.style.height="40px";
    enterBtn.innerHTML='<span class="button-text">Calculate</span>\n<span class="button-icon">\n\t<ion-icon name="enter-outline"></ion-icon>\n</span>';
    enterBtn.className="enter-button"

    partyInfo.append(totalPrice);
    partyInfo.append(enterBtn);
}

function calculate()
{

}