export class Hero {
    constructor(public name: string, public state: string = 'inactive', private hidden: boolean = true) {}

    isHidden() {
        return this.hidden;
    }

    toggleVisibility() {
        this.hidden = !this.hidden;
    }

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}
