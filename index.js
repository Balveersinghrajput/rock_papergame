let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".images");
const msgg = document.querySelector("#btn");


const comp_choice = () => {
    const option = ["Rock", "Paper", "Scissor"];
    const randam_choice = Math.floor(Math.random() * 3);
    return option[randam_choice];

}
// const Drawgame= () =>{
//     console.log("Game Draw");
// };

const plagame = (user_choice) =>{
    console.log("User Choice = ", user_choice);
    // Genrate computer choice :
    const computer = comp_choice();
    console.log("Computer choice = ", computer);

    if(user_choice === computer){
        //Draw the game:-
        Drawgame();

    }
    else{
        let userWin = true;
        if(user_choice == "Rock"){
            //Scissor,paper
            userWin = computer == "Paper"? false: true;
        }else if(user_choice == "Paper"){
            //Rock , Scissor
            userWin = computer == "Scissor" ? false : true;
        }else{
            //Rock ,paper
            userWin = computer =="Rock" ? false: true;
        }
        showWinner(userWin);
    }

};
const Drawgame= () =>{
    console.log("Game Draw");
    msgg.innerText = "Game Draw, Play Again!" ;
};

const showWinner = (userWin)=> {
    if(userWin){
        console.log("You Winner :)");
        msgg.innerText = "You Winner :)";
    }else{
        console.log("Computer Winner :(");
        msgg.innerText = "Computer Winner " ;
    }
}



choice.forEach((images) => {
    images.addEventListener("click", ()=>{
        const user_choice = images.getAttribute("id");
        plagame(user_choice);


    });
});