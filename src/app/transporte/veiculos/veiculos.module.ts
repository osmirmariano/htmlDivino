import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VeiculosListComponent} from './veiculos-list/veiculos-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {Ng2PaginationModule} from "ng2-pagination";
import {DropdownModule, TooltipModule} from "primeng/primeng";
import {VeiculoService} from "./service/veiculo.service";
import {VeiculosRouting} from "./veiculos.routing";
import {VeiculosFormComponent} from './veiculos-form/veiculos-form.component';
import {TipoDocumentoService} from "../tipo-documento/service/tipo-documento.service";
import {MarcaCarroService} from "../../usuarios/services/marca-carro.service";
import {UtilService} from "../../../core/services/util.service";
import {ModeloCarroService} from "../../usuarios/services/modelo-carro.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        Ng2PaginationModule,
        TooltipModule,
        DropdownModule,
        VeiculosRouting
    ],
    declarations: [VeiculosListComponent, VeiculosFormComponent],
    providers: [
        VeiculoService,
        TipoDocumentoService,
        MarcaCarroService,
        UtilService,
        ModeloCarroService
    ]
})
export class VeiculosModule {
}
