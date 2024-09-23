export class SkillPoint {
    private image: string;
    private title: string;
    private description: string;
    private backgroundColor: string;

    public constructor(image: string, title:string , description: string, backgroundColor: string) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.backgroundColor = backgroundColor;
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

    public getBackgroundColor(): string {
        return this.backgroundColor;
    }


}