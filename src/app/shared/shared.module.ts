import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SelectComponent } from './components/select/select.component';
import { MenuDesktopComponent } from './components/header/components/menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from './components/header/components/menu-mobile/menu-mobile.component';
import { HeaderComponent } from './components/header/components/header/header.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SelectComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
    AvatarComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SelectComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    BrowserAnimationsModule,
  ],
})
export class SharedModule {}
