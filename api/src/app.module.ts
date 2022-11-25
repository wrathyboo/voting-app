import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';

//Database connection: MongoDB
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PlayersModule } from './players/players.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [HomeModule,
    AdminModule,
    MongooseModule.forRoot('mongodb+srv://kody:ugtjguyjhy@chess-vote.8czfotc.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    PlayersModule,
    GameModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
