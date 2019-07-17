import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DecorationsComponent } from './decorations/decorations.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DecorationListComponent } from './decorations/decoration-list/decoration-list.component';
import { DecorationDetailsComponent } from './decorations/decoration-details/decoration-details.component';
import { DecorationItemComponent } from './decorations/decoration-list/decoration-item/decoration-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DecorationsComponent,
    ShoppingListComponent,
    DecorationListComponent,
    DecorationDetailsComponent,
    DecorationItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
