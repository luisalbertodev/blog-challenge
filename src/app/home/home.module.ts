import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PostModule } from '@app/post/post.module';
import { ChipComponent } from './components/chip/chip.component';
import { ChipsComponent } from './components/chips/chips.component';

@NgModule({
  declarations: [HomeComponent, ChipComponent, ChipsComponent],
  imports: [CommonModule, HomeRoutingModule, PostModule],
})
export class HomeModule {}
