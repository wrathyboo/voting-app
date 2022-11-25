
// import { storage } from 'storage/storage.config';
import { Controller, Get, Post, Body, Patch, Param, Delete, Render, UseInterceptors, UploadedFile, Redirect, Res } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from "./config/storage.config"


@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('test')
  test(){
     console.log(this.playersService.getAge('1995-02-06'));
  }

  @Get('create')
  @Render('admin/game/player-create')
  player_create(){
  }
  
  @Get('list')
  @Render('admin/game/player-list')
  async show_roster(){
    const roster = await this.playersService.findAll();
      return { roster }
  }

  @Post('create')
  @Redirect('list')
  @UseInterceptors(
    FileInterceptor(
      "image", // name of the field being passed
      { storage }
    )
  )
  async push(@Body() createPlayerDto: CreatePlayerDto, 
               @UploadedFile() file: Express.Multer.File ) {
                createPlayerDto.image = file.filename;
    this.playersService.create(createPlayerDto);
  }

  @Get(':img')
  seeUpLoadedFile(@Param('img') image,
  @Res() res ){
    return res.sendFile(image, {root: 'public/images/players'})
  }

  // @Get()
  // findAll() {
  //   return this.playersService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.playersService.remove(+id);
  // }
}
