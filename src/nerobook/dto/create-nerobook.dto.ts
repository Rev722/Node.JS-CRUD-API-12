import { Category } from "../schemas/nerobook.schema";


export class CreateNerobookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}