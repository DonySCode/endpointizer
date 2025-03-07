import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      throw new HttpException(`Task with id ${id} not found`, 404);
    }
    return task;
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const existingTask = await this.taskRepository.findOne({
      where: { name: createTaskDto.name },
    });
    if (existingTask) {
      throw new HttpException(
        `Task with name ${createTaskDto.name} already exists`,
        400,
      );
    }
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this.taskRepository.update(id, updateTaskDto);
    const updatedTask = await this.taskRepository.findOne({ where: { id } });
    if (!updatedTask) {
      throw new HttpException(`Task with id ${id} not found`, 404);
    }
    return updatedTask;
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
