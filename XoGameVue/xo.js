var app = new VTTCue({
    el: '#app',
    data: {
        table: [
            '', '', '',
            '', '', '',
            '', '', '',
        ],
        activePlayer: 'X',
        finished: false,
    },
    methods: {
        //index reprezent the cell which is in move(0-8)
        makeMove(index) {
            //(guard clause) verifying if we have smthing in our cell
            if (this.table[index] != '') return
            //we use splice here for table's avtivity
            this.table.splice(index, 1, this.activePlayer);
            //changing active player
            this.activePlayer = this.activePlayer == 'X' ? '0' : 'X';
            //verifucation if the game has ended..
            this.checkFinished();
        },
        checkFinished() {
            this.checkComplete(this.table.filter((value, index) => index < 3));
            this.checkComplete(this.table.filter((value, index) => index > 2 && index < 6));
            this.checkComplete(this.table.filter((value, index) => index > 5));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 0));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 1));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 2));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 2));
            this.checkComplete(this.table.filter((value, index) => index % 4 == 0));
            this.checkComplete(this.table.filter((value, index) => [2, 4, 6].includes(index)));
        },
        checkComplete(cells) {
            if(cells.every(cell => cell == 'X') 
            || cells.every(cell => cell == '0')   
            ) {
                this.finished = true;
            }
        }
    }
});


