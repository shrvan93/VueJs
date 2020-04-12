class revesibleString extends String {
    reverse() {
        return this
                    .split('')
                    .reverse()
                    .join('');
    }
}

var myName = new revesibleString("SHRVAN");
console,log(myName.reverse()); 
