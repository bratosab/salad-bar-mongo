import { OnModuleDestroy } from '@nestjs/common';
import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Subscription } from 'rxjs';
import { Server } from 'socket.io';
import { Topping } from './schemas/topping.schema';
import { ToppingService } from './topping.service';

@WebSocketGateway(3001)
export class ToppingsGateway implements OnGatewayInit, OnModuleDestroy {
  private toppingSubscription: Subscription;

  constructor(private toppingService: ToppingService) {}

  onModuleDestroy() {
    this.toppingSubscription && this.toppingSubscription.unsubscribe();
  }

  afterInit() {
    this.toppingSubscription = this.toppingService.toppingsList$.subscribe(
      (toppings) => {
        this.server.sockets.emit('toppings', toppings);
      },
    );
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('toppings')
  findAll(): Promise<Topping[]> {
    return this.toppingService.findAll();
  }
}
