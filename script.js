
function getNumber()
{
        var num = document.getElementById("numPeopleInput").value;
        for(let i = 0; i < num; i++)
        {
            var location = document.getElementById("purchase");
            var input = document.createElement("input");
            input.setAttribute("id", ""+i);
            location.appendChild(input);
        }
}