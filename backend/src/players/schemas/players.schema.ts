import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Player {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  birthdate: Date;

  @Prop()
  country: string;
  
  @Prop()
  desc: string;

  @Prop()
  image: string;
  
  @Prop({default: Date.now})
  created_at: Date;

}

export const PlayerSchema = SchemaFactory.createForClass(Player);