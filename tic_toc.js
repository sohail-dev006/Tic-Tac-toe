
let box = document.getElementById("element");
let Reset = document.querySelector("#reset");
let message = document.getElementById("message");


let click = true;


const winingArray = [
    
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];


let array = ["", "", "", "", " ", " ", "", " ", " "];

    function createBoard() {
        box.innerHTML = '';
        array.forEach((e, index) => {
            let btn = document.createElement("button");
                btn.innerText = e;
                box.append(btn);
                // console.log(index);
                btn.addEventListener('click', () => {
                    if(click){
                        btn.innerText ="O"
                        array[index] = "O"
                        click = false;
                  
                    }else{
                        btn.innerText = "X"
                        array[index] = "X"
                        click = true;
    
                        
                    }
                    
                    win();
                    btn.disabled  = true
                    // disabledButtons();
                });
                  
            })
    }

function disableAllButtons() {
    let buttons = document.querySelectorAll('#element button');
    buttons.forEach(button => button.disabled = true);
}

function win() {
    console.log(array)

    for (const pattern of winingArray) {
        // console.log(pattern);
        //  console.log(array[pattern[0]], array[pattern[1]],array[pattern[2]]);
        // let pot1 = array[pattern[0]].innerText;
        // let pot2 = array[pattern[1]].innerText;
        // let pot3 = array[pattern[2]].innerText;
        // if(pot1 && pot1 === pot2 && pot2 === pot3){
        //    console.log(`winner: ${pot1}`);
        //      }

        const [a, b, c] = pattern; 

        let value1 = array[a];
        let value2 = array[b];
        let value3 = array[c];

        // if (value1 != "" && value2 != ""&& value3 != ""){}
            if (value1 && value1 === value2 && value2 === value3){
                message.textContent = `Congratulations Winner is ${value1}`; 
                disableAllButtons();
                return;  
            }
            if (array.every(cell => cell === "O" || cell === "X")){
                message.textContent = "Match is Tied";
                disableAllButtons();
     
            }
    }

}

function resetGame() {
    array = ["", "", "", "", " ", " ", "", " ", " "];
    click = true; 
    message.textContent = ''; 
    createBoard();
}

Reset.addEventListener('click', resetGame);

createBoard(); 




    
  





    


