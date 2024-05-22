import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Nerobook } from './schemas/nerobook.schema';

@Injectable()
export class NerobookService {
    constructor(
        @InjectModel (Nerobook.name)
        private nerobookModel: mongoose.Model <Nerobook>
    ) {}

    async findAll(): Promise <Nerobook[]> {
        const nerobooks = await this.nerobookModel.find();
        return nerobooks;
    }

    async create(nerobook: Nerobook): Promise <Nerobook> {
        const res = await this.nerobookModel.create(nerobook);
        return res;
    }

    async findById(id: string): Promise <Nerobook> {
        const nerobook = await this.nerobookModel.findById(id);

        if(!nerobook) {
            throw new NotFoundException('Nerobook not Found.')
        }
        return nerobook;
    }

    async updateById(id: string, nerobook: Nerobook): Promise <Nerobook> {
        return await this.nerobookModel.findByIdAndUpdate(id, nerobook, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise <Nerobook> {
        return await this.nerobookModel.findByIdAndDelete(id);
    }
}
