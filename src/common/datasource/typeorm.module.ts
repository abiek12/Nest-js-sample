import { Global, Logger, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Global() // makes the module available globally for other modules once imported in the app modules
@Module({
    imports: [],
    providers: [
        {
            provide: DataSource, // add the datasource as a provider
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                const logger = new Logger();
                // using the factory function to create the datasource instance
                try {
                    const datasource = new DataSource({
                        type: 'postgres',
                        host: configService.get<string>('DB_HOST'),
                        port: configService.get<number>('DB_PORT') ?? 5433,
                        username: configService.get<string>('DB_USER'),
                        password: configService.get<string>('DB_PASSWORD'),
                        database: configService.get<string>('DB_NAME'),
                        synchronize: false,
                        entities: [`${__dirname}/../**/**.entity{.ts,.js}`], // this will automatically load all entity file in the src folder
                    });
                    await datasource.initialize();
                    logger.log("Database connected successfully");
                    return datasource;
                } catch (error) {
                    logger.error("Error connecting to database", error);
                    throw error;
                }
            }
        }
    ],
    exports: [DataSource]
})
export class TypeormModule {}
