import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from '../../_theme/iconsProvider.module';
import { NgZorroModule } from '../../_theme/ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleApplicationRoutingModule } from './role-application-routing.module';
import { RoleApplicationComponent } from './role-application.component';
import { RoleAppDetailComponent } from './role-app-detail/role-app-detail.component';
import { DeleteComponent } from './delete/delete.component';
import { RoleAppFormComponent } from './role-app-form/role-app-form.component';

@NgModule({
  declarations: [RoleApplicationComponent, RoleAppDetailComponent, DeleteComponent, RoleAppFormComponent],
  imports: [
    CommonModule,
    RoleApplicationRoutingModule,
    HttpClientModule,
    IconsProviderModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RoleApplicationModule {}
