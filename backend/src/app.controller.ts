import { Controller, Get, Redirect } from '@nestjs/common';
import { url } from 'inspector';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  @Redirect('admin')
  toAdmin(){
   
  }

  @Get('doc')
  document(){
     
  }
}
