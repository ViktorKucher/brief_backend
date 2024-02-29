import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'briefs' })
export class Brief {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('json')
  brief_content: Array<{
    question: string;
    answer: string | string[] | null;
  }>;
}
