import { Injectable } from '@nestjs/common';
import { CreateBriefDto } from './dto/create-brief.dto';
import { UpdateBriefDto } from './dto/update-brief.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brief } from './entities/brief.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BriefService {
  constructor(
    @InjectRepository(Brief)
    private briefRepository: Repository<Brief>,
  ) {}

  createBrief(dto: CreateBriefDto): Promise<Brief> {
    const brief: Brief = new Brief();
    brief.brief_content = dto.brief_content;
    return this.briefRepository.save(brief);
  }

  async findAllBrief(): Promise<Brief[]> {
    return await this.briefRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} brief`;
  }

  update(id: number, updateBriefDto: UpdateBriefDto) {
    console.log(updateBriefDto);
    return `This action updates a #${id} brief`;
  }

  async remove(id: string) {
    await this.briefRepository.delete({ id });
    return await this.briefRepository.find();
  }
}
