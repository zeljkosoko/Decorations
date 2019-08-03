export class Decoration {
    
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}
//Model created by simply way: right click on folder>add new file: "decoration.model.ts"
//or 
//ng generate class decoration.model.ts in folder