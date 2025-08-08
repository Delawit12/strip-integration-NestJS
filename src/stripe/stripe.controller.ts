import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('checkout')
  async checkout(@Body() body: { amount: number }) {
    const session = await this.stripeService.createCheckoutSession(
      body.amount,
      'usd', // you can change to 'etb' or any supported currency
      'http://localhost:3000/success',
      'http://localhost:3000/cancel',
    );
    return { url: session.url };
  }
}
