import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Redirect, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/users.schema';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('list')
  @Render('admin/accounts')
  async show_users_list(){
    const accounts = await this.usersService.findAll();
      return { accounts }
  }

  @Get('create')
  @Render('admin/create_user')
  users_create(){
    
  }
  //yourDate.split("T")[0];

  @Post('create')
  @Redirect('list')
  create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }
  
  @Get(':id')
  @Delete(':id')
  @Redirect('list')
  remove(@Param('id') id: string) {
    this.usersService.remove(id);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  
  @Get('api/list')
  async Apitshow(@Res() res: Response ) {
    const accounts = await this.usersService.findAll();
    res.send({
      users: accounts
    });
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }
  

}
