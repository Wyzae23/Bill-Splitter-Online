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
        personNameInput.id="personInfoName" + i;
        personNameInput.setAttribute("required", "");

        let personNameSpan = document.createElement('span');
        personNameSpan.className="placeholder";
        personNameSpan.textContent="Name";

        let personPaymentInput = document.createElement('input');
        personPaymentInput.type="text";
        personPaymentInput.id="personInfoPayment" + i;
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

    totalPrice.innerHTML='<label class="custom-field">\n\t<input type="text" id="totalPriceLabel" required>\n<span class="placeholder">Final Price</span>\n</label>'

    let enterBtn = document.createElement('button');
    enterBtn.onclick=calculate;
    enterBtn.id="calculate-button";
    enterBtn.style.height="40px";
    enterBtn.style.color="white";
    enterBtn.innerHTML='<span class="button-text">Calculate</span>\n<span class="button-icon">\n\t<ion-icon name="enter-outline"></ion-icon>\n</span>';
    enterBtn.className="enter-button"

    partyInfo.append(totalPrice);
    partyInfo.append(enterBtn);
}

function calculate()
{
    let group = document.getElementsByClassName("person-info");
    let groupInfo = [];
    let originalCost = parseFloat(0);
    let finalPrice = document.getElementById("totalPriceLabel").value;
    for(let i = 0; i < group.length; i++)
    {
        let person = [];
        let name = document.getElementById("personInfoName" + i).value;
        let payment = document.getElementById("personInfoPayment" + i).value;
        payment = parseFloat(payment);
        person[0] = name;
        person[1] = payment;
        groupInfo[i] = person;
        originalCost = originalCost + payment;
    }
    let multFactor = parseFloat(1);
    if(originalCost > 0)
    {
        multFactor = finalPrice / originalCost;
    }

    for(let i = 0; i < groupInfo.length; i++)
    {
        groupInfo[i][1] *= multFactor;
        groupInfo[i][1] = Math.round(100*groupInfo[i][1])/100;
    }

    let rightSideWrapper = document.getElementsByClassName("main-wrapper-right")[0];
    rightSideWrapper.innerHTML="";
    let rightSideWrapperHeader = document.createElement('div');
    rightSideWrapperHeader.className = "right-side-wrapper-header";
    rightSideWrapperHeader.textContent = "Final Payments";
    rightSideWrapperHeader.style.fontSize = "36px";
    let nameList = document.createElement('div');
    nameList.className = "name-list";
    let paymentList = document.createElement('div');
    paymentList.className = "payment-list";
    rightSideWrapper.append(rightSideWrapperHeader);

    let mainWrapperRightContent = document.createElement('div');
    mainWrapperRightContent.className = "main-wrapper-right-content";

    let nameListHeader = document.createElement('div');
    nameListHeader.className = "name-list-header";
    nameListHeader.textContent = "Name";
    nameListHeader.style.fontSize = "30px";
    nameListHeader.style.marginBottom = "20px";

    let paymentListHeader = document.createElement('div');
    paymentListHeader.className = "payment-list-header";
    paymentListHeader.textContent = "Payment";
    paymentListHeader.style.fontSize = "30px";
    paymentListHeader.style.marginBottom = "20px";

    nameList.append(nameListHeader);
    paymentList.append(paymentListHeader);

    for(let i = 0; i < groupInfo.length; i++)
    {
        let personName = document.createElement('div');
        personName.className="main-wrapper-right-person-name";
        let personPayment = document.createElement('div');
        personPayment.className="main-wrapper-right-person-payment";

        personName.textContent = groupInfo[i][0] + ":";
        personPayment.textContent = "$" + groupInfo[i][1];

        nameList.append(personName);
        paymentList.append(personPayment);
    }
    mainWrapperRightContent.append(nameList, paymentList);
    rightSideWrapper.append(mainWrapperRightContent);
}