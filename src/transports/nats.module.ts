import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: [],
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: [],
        },
      },
    ]),
  ],
})
export class NatsModule {}
