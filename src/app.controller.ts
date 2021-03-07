import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('Index')
  index() {
    return {
      hello: 'world',
    };
  }
}
