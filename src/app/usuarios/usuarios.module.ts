import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {UsuarioListComponent} from './usuario-list/usuario-list.component';
import {UsuarioFormComponent} from './usuario-form/usuario-form.component';
import {UsuarioDetailComponent} from './usuario-detail/usuario-detail.component';
import {UsuariosRouting} from './usuarios.routing';
import {SharedModule} from '../shared/shared.module';
import {Ng2PaginationModule} from 'ng2-pagination';
import { PerfilComponent } from './perfil/perfil.component';
import { MeusDadosDetailComponent } from './perfil/meus-dados-detail/meus-dados-detail.component';
import {CalendarModule, DialogModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {DocumentoSwitchFormModule} from "../transporte/documentos/componentes/documento-switch-form/documento-switch-form.module";
import {TextMaskModule} from "angular2-text-mask";

@NgModule({
    imports: [
        CommonModule,
        UsuariosRouting,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        Ng2PaginationModule,
        CalendarModule,
        DialogModule,
        DropdownModule,
        DocumentoSwitchFormModule,
        TextMaskModule
    ],
    declarations: [
        UsuarioListComponent,
        UsuarioFormComponent,
        UsuarioDetailComponent,
        PerfilComponent,
        MeusDadosDetailComponent
    ],
    exports: [
        RouterModule,
        UsuarioListComponent,
    ],
    providers: [],
})
export class UsuariosModule {}
