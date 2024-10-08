import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
//
import { SubscriptionService } from './subscription.service';
import { Subscription } from './subscription.entity';
import { SubscriptionModel } from './subscription.model';
//
import { Relations, AuthUserId } from '@/core/decorators';
import { AuthGuard } from '@/core/guards';

@Resolver(() => SubscriptionModel)
export class SubscriptionResolver {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Query(() => [SubscriptionModel])
  async subscriptions(@Relations() relations: any): Promise<Subscription[]> {
    return this.subscriptionService.getAll({ relations });
  }

  @UseGuards(AuthGuard)
  @Mutation(() => SubscriptionModel)
  async follow(
    @Args('userId', { type: () => Int }) userId: number,
    @AuthUserId() authUserId: number,
    @Relations() relations: any,
  ) {
    return this.subscriptionService.follow(userId, authUserId, relations);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => SubscriptionModel)
  async unfollow(
    @Args('userId', { type: () => Int }) userId: number,
    @AuthUserId() authUserId: number,
    @Relations() relations: any,
  ) {
    return this.subscriptionService.unfollow(userId, authUserId, relations);
  }
}
