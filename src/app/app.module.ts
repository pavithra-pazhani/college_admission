import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { StudentComponent } from './pages/student/student.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { StudentCreateComponent } from './pages/student/student-create/student-create.component';
import { StudentEditComponent } from './pages/student/student-edit/student-edit.component';
import { AdmissionCreateComponent } from './pages/admission/admission-create/admission-create.component';
import { AdmissionEditComponent } from './pages/admission/admission-edit/admission-edit.component';
import { FilterPipe } from './pages/admission/admission-create/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    StudentComponent,
    AdmissionComponent,
    StudentCreateComponent,
    StudentEditComponent,
    AdmissionCreateComponent,
    AdmissionEditComponent,
    FilterPipe
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
