import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NerobookService } from './nerobook.service';
import { Nerobook } from './schemas/nerobook.schema';
import { CreateNerobookDto } from './dto/create-nerobook.dto';
import { UpdateNerobookDto } from './dto/update-nerobook.dto';

@Controller('nerobooks')
export class NerobookController {
    constructor (private nerobookService: NerobookService) {}

    @Get()
    async getAllNerobooks(): Promise <Nerobook[]> {
        return this.nerobookService.findAll();
    }

    @Post()
    async createNerobook(
        @Body()
        nerobook: CreateNerobookDto,
    ): Promise <Nerobook> {
        return this.nerobookService.create(nerobook);
    }

    @Get(':id')
    async getNerobook(
        @Param('id')
        id: string,
    ): Promise <Nerobook> {
        return this.nerobookService.findById(id);
    }

    @Put(':id')
    async updateNerobook(
        @Param('id')
        id: string,
        @Body()
        nerobook: UpdateNerobookDto,
    ): Promise <Nerobook> {
        return this.nerobookService.updateById(id, nerobook);
    }

    @Delete(':id')
    async deleteNerobook(
        @Param('id')
        id: string,
    ): Promise <Nerobook> {
        return this.nerobookService.deleteById(id);
    }
}
