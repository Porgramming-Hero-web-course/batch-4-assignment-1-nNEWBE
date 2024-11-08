{
    class Car {
        constructor(public make: string, public model: string, public year: number) { }
        getCarAge(): number {
            const age = new Date().getFullYear() - this.year;
            return age;
        }
    }

}