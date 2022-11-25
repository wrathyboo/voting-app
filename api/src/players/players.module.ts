import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { Player, PlayerSchema } from './schemas/players.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
            MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]), 
            MulterModule.register({dest: "./public/images"})
           ],
  controllers: [PlayersController],
  providers: [PlayersService]
})
export class PlayersModule {}
