import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    YUELE = 'POCKYBOY',
    GOONIE = 'KEKE',
    AUTUMN = 'FAITH',
}


@Schema({
    timestamps: true,
})

export class Nerobook {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const NerobookSchema = SchemaFactory.createForClass(Nerobook)