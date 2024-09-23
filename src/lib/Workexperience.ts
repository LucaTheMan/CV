export class Workexperience {
    private image: string;
    private title: string;
    private description: string;

    public constructor(image: string, title:string , description: string) {
        this.image = image;
        this.title = title;
        this.description = description;
    }

    public getImage(): string {
        return this.image;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }


}