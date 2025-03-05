import { IsString, IsNotEmpty, IsIn, IsObject } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsIn(['GET', 'POST', 'PUT', 'DELETE'])
  method: string;

  @IsString()
  @IsNotEmpty()
  route: string;

  @IsObject()
  params: any;
}
