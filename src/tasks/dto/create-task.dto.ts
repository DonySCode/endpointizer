import { IsString, IsNotEmpty, IsIn, IsObject, IsOptional, IsArray, IsBoolean } from 'class-validator';

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
  @IsOptional()
  inputSchema: Record<string, any>;

  @IsObject()
  @IsOptional()
  responseSchema: Record<string, any>;

  @IsArray()
  @IsOptional()
  middleware: string[];

  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
