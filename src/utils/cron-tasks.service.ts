import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronTasksService {
    private readonly logger = new Logger(CronTasksService.name);

    @Cron('*/30 * * * * *')
    handleCron() {
        this.logger.log("Cron Job is running!");
    }
}
