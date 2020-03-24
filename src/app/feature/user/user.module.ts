import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';
import { UserFacade} from './user.facade';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { LessonEndPipe } from './lesson-end.pipe';

@NgModule({
  declarations: [LoginComponent, UserProfileComponent, UserSettingsComponent, LessonEndPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    StoreModule.forFeature('user', reducer),
    EffectsModule.forFeature([UserEffects]),
    MatButtonModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [UserFacade]
})
export class UserModule { }
