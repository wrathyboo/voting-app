import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from './schemas/players.schema';
import  * as moment from 'moment';

@Injectable()
export class PlayersService {
  constructor(@InjectModel(Player.name) private playerModel: Model<PlayerDocument>) {}
  moment(): moment.Moment {
    return moment();
  }
  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const createdPlayer = new this.playerModel(createPlayerDto);
    return createdPlayer.save();
  }


  async findAll(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  getAge(birthdate: string){
    const years = moment().diff(new Date(birthdate), 'years');
    return years;
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
