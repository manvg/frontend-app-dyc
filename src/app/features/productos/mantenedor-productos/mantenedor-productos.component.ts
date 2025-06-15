import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../../core/services/productos.service';
import { Producto } from '../../../core/models/producto.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mantenedor-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './mantenedor-productos.component.html',
  styleUrl: './mantenedor-productos.component.scss'
})

export class MantenedorProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productosService.obtenerTodos().subscribe({
      next: data => this.productos = data,
      error: err => console.error('Error al cargar productos', err)
    });
  }

  nuevoProducto(): void {
    this.router.navigate(['/productos/nuevo']);
  }

  editarProducto(id: number): void {
    this.router.navigate(['/productos/editar', id]);
  }

  desactivarProducto(id: number): void {
    if (confirm('¿Estás seguro de desactivar este producto?')) {
      this.productosService.desactivar(id).subscribe({
        next: () => this.cargarProductos(),
        error: err => console.error('Error al desactivar producto', err)
      });
    }
  }

  eliminarProducto(id: number): void {
    if (confirm('¿Estás seguro de eliminar este producto permanentemente?')) {
      this.productosService.eliminar(id).subscribe({
        next: () => this.cargarProductos(),
        error: err => console.error('Error al eliminar producto', err)
      });
    }
  }
}
