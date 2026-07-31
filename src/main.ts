import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('INFOAO API')
    .setDescription('Este projeto nasceu da necessidade encontrar informações de processos, tratamento de documentos e contas, evitando ter que se deslocar a uma instutuição só para saber dos requisitos para um processo')
    .setVersion('1.0')
    .addTag('INFOAO')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
