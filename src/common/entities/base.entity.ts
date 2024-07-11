import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class Base {
  @ApiProperty({ description: 'Primary key as ID', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Created at',
    example: new Date(),
  })
  @CreateDateColumn({ name: 'createdAt' })
  createdAt?: Date;

  @ApiProperty({ description: 'Created By', example: 123 })
  @Column('int', { nullable: true })
  createdBy?: number;

  @ApiProperty({
    description: 'Updated at',
    example: new Date(),
  })
  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt?: Date;

  @ApiProperty({ description: 'Updated By', example: 123 })
  @Column('int', { nullable: true })
  updatedBy?: number;
}
