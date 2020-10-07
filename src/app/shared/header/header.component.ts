import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( public _servicio: InfoPaginaService,
               private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  buscarProducto( termino: string ) {
    if ( termino.length < 1 ){
      return;
    }

    this.router.navigate(['/search', termino]);
  }

}
