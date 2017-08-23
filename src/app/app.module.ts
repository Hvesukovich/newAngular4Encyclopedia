import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {TabbarComponent} from './components/tabbar/tabbar.component';
import {SearchComponent} from './components/search/search.component';
import {DataComponent} from './components/data/data.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {ResourcesService} from './services/resources.service';
import {RequestsService} from './services/requests.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TabbarComponent,
        SearchComponent,
        DataComponent,
        PaginationComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        ResourcesService,
        RequestsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
