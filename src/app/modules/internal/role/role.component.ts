import { Component, OnInit } from '@angular/core';
// Importacion de Modulos
import { RoleModule } from 'src/app/interfaces/modules/role.interface';
// Importacion de Servicios
import { ApiService } from 'src/app/services/functions/api/api.service';
import { ButtonService } from 'src/app/services/functions/button/button.service';
import { RoleService } from 'src/app/services/modules/role/role.service';
import { TableService } from 'src/app/services/functions/table/table.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  constructor (
    private serviceApi: ApiService,
    private serviceButton: ButtonService,
    private serviceTable: TableService,
    private serviceRole: RoleService,
  ) {}

  columnSet: [] | undefined;
  roleData: RoleModule[] = [];

  ngOnInit(): void {
    this.getColumn();
  }

  getColumn() {
    this.serviceApi.getColumn('roles').subscribe({
      next: (response: any) => {
        console.log(response);
        this.columnSet = response;
        this.getSelect();
      },
      error: (err: any) => console.error(err),
      complete: () => (false),
    });
  }

  getSelect() {
    this.serviceApi.getSelect('roles').subscribe({
      next: (response: any) => {
        console.log(response);
        // Mapea los datos del servicio al formato esperado
        this.roleData = response.data;
        console.log(this.roleData);
        // Concatenar los botones en un solo arreglo
        const btnGroups = [
          ...this.serviceButton.buttonDataAction(),
          ...this.serviceButton.buttonDataExport(),
          ...this.serviceButton.buttonFielAction(),
        ];
        // Construir tabla con datos y botones
        this.serviceTable.getTable(
          'tbRole',
          this.roleData,
          this.columnSet,
          btnGroups
        );
      },
      error: (err: any) => console.error(err),
      complete: () => (false),
    });
  }
}
