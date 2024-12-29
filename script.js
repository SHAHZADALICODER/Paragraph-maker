let btn = document.getElementById("paramaker");
let rbtn = document.getElementById("pararemover");

let paraNum = 0;

function getNewParagraph()
{
    let newpara = document.createElement("p");
    newpara.id = paraNum.toString();
    newpara.textContent = "Paragraph created!";
    document.body.appendChild(newpara);

    paraNum = paraNum + 1;
    console.log("Current updated paragraph id value is : ",paraNum);

}

function removeParagraph()
{
    let paraToRemove = document.getElementById((paraNum - 1).toString());
    if(paraToRemove != null)
    {
        paraToRemove.remove();
        console.log("Paragraph removed , The id of that Paragraph was :",paraNum - 1);
        
        paraNum = paraNum - 1;
    }
}

btn.addEventListener("click" , function(){
    getNewParagraph();
});

rbtn.addEventListener("click" , function(){
    removeParagraph();
});