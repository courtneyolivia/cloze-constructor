var inquirer = require("inquirer");

function BasicCard (frontSide, backSide) {
    this.front = frontSide;
    this.back = backSide;
}

function createNewCard() {
inquier.prompt ([{
    type: "input",
    name:"frontSide",
    message:"What is the question you want to ask?"
},{
    type:"input",
    name:"backSide",
    message:"What is the answer to the above question?"
}]).then(function(inputs){
    var card = new BasicCard(inputs.frontSide,inputs.backSide);
    console.log(card);
})
}
createNewCard();