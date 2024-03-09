import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BriefService } from './brief.service';
import { UpdateBriefDto } from './dto/update-brief.dto';

@Controller('brief')
export class BriefController {
  constructor(private readonly briefService: BriefService) {}

  @Post()
  create(@Body() createBriefDto: any) {
    console.log(createBriefDto);
    return this.briefService.createBrief(createBriefDto);
  }

  @Get()
  findAll() {
    return this.briefService.findAllBrief();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.briefService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBriefDto: UpdateBriefDto) {
    return this.briefService.update(+id, updateBriefDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.briefService.remove(id);
  }
}
