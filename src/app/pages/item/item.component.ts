import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  // tslint:disable-next-line: no-shadowed-variable
  constructor( private route: ActivatedRoute , public productoService: ProductosService ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    this.route.params
      .subscribe( parametros => {
          // console.log( parametros.id);
        this.productoService.getProducto(parametros['id'])
        .subscribe( (producto: ProductoDescripcion) => {
          this.id = parametros ['id'];
          this.producto = producto;
          
        }) ;

      });
  }

}
