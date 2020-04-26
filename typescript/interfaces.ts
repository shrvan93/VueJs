interface Animal {
    name: string;
    speak(): void;
}

interface Pet {
    play(): void;
}

interface Robot {
    start(): void;
    stop(): void;
}

class RoboDog implements Animal, Pet, Robot  {
    name: string;
    isStarted: boolean;
    constructor (name: string ) {
        this.name = name;
        this.isStarted = true;
    }
    speak(): void {
        console.log('Woof! Woof!')
    }
    play(): void {
        console.log('Running to catch the stick')
    }
    start(): void {
        console.log('Robot started')
    }
    stop(): void {
        console.log('Robot stopped')
    }

}

let Lessie = new RoboDog('Lessie');

Lessie.speak();
Lessie.play();
Lessie.stop();
