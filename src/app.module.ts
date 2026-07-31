import { Module } from '@nestjs/common';
import { DatabaseModule } from './workdir/infra/database/database.module';
import { CategoryModule } from './workdir/infra/http/category/category.module';
import { ProvinceModule } from './workdir/infra/http/province/province.module';

@Module({
  imports: [DatabaseModule, CategoryModule, ProvinceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
