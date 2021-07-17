import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';


@Controller('review')
export class ReviewController {
    @Post("create")
    async create(@Body() dto: Omit<ReviewController, "_id">) {

    }

    @Delete(":id")
    async delete(@Param("id") id: string) {

    }
    @Get("byProduct/:productId")
    async getbyProduct(@Param("productId") productId: string) {

    }

}
