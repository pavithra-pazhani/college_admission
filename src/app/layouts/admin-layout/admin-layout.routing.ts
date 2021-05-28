import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { AdmissionComponent } from 'app/pages/admission/admission.component';
import { StudentComponent } from 'app/pages/student/student.component';
import { StudentCreateComponent } from 'app/pages/student/student-create/student-create.component';
import { StudentEditComponent } from 'app/pages/student/student-edit/student-edit.component';
import { AdmissionCreateComponent } from 'app/pages/admission/admission-create/admission-create.component';
import { AdmissionEditComponent } from 'app/pages/admission/admission-edit/admission-edit.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'student',
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'list',
                component: StudentComponent
            },
            {
                path: 'create',
                component: StudentCreateComponent
            },
            {
                path: 'edit',
                component: StudentEditComponent
            }
        ]
    },
    {
        path: 'admission',
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'list',
                component: AdmissionComponent
            },
            {
                path: 'create',
                component: AdmissionCreateComponent
            },
            {
                path: 'edit',
                component: AdmissionEditComponent
            }
        ]
    },
    /*   { path: 'table',     component: TableComponent },
      { path: 'typography',     component: TypographyComponent },
      { path: 'icons',          component: IconsComponent },
      { path: 'maps',           component: MapsComponent },
      { path: 'notifications',  component: NotificationsComponent },
      { path: 'upgrade',        component: UpgradeComponent } */
];
