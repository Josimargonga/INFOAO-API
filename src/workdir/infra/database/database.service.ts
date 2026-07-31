import "dotenv/config"
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit{

  constructor(){
    const adapter = new PrismaPg({ connectionString:`${process.env.DATABASE_URL}` });
    super({adapter})
  }
  async onModuleInit() {

    try {
      await this.$connect();
      Logger.log("database conectado")
    } catch (error) {
      Logger.log("database conectado", error)
    }
  }
  

}
