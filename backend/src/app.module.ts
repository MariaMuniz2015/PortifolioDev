import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { DbModule } from './db/db.module';
import { ProjetoModule } from './projeto/projeto.module';


@Module({
  imports: [DbModule, ProjetoModule, TecnologiaModule],
  controllers: [AppController],

})
export class AppModule {}
