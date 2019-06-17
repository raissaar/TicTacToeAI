var tiles = document.getElementsByClassName("tile");
var buttons = document.getElementsByClassName("button");

//array untuk jumlah kotak dalam board
var state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//cek game running
var game = true;

///PLAYER
var HUMAN = false;
var COMPUTER = true;

///Value
var HUMVAL = -1;
var COMVAL = 1;

function reset() 
{
    for(var x=0; x<9; x++)
    {
        tiles[x].style.background = "#fff";
        state[x] = 0;
    }

    for(var x=0; x<2; x++)
    {
        buttons[x].style.width = "15.5vh";

        buttons[x].style.margin = "0.5vh";
        buttons[x].style.opacity = "1";
    }

    game = true;
}

function claim(clicked)
{
    if(!game)
        return;
    //test letak click button dengan index
    for(var x=0; x<9; x++)
    {
        if(tiles[x] == clicked && state[x] == 0)
        {
            set(x, HUMAN);
            callAI();
        }
    }
}

function set(index, player)
{
    if(!game)
        return;

    if(state[index] == 0)
    {
        buttons[0].style.width = "0";
        buttons[0].style.margin = "0";
        buttons[0].style.opacity = "0";

        buttons[1].style.width = "32vh";

        if(player == HUMAN)
        {
            tiles[index].style.background = "#22f";
            state[x] = HUMVAL;
        }
        else
        {
            tiles[index].style.background = "#f22";
            state[x] = COMPUTER;
        }
    }

}
