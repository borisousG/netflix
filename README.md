- Data Sources
 - api de peliculas
  - url | environments
  - autenticación | interceptor
  - categorias
  - peliculas en tendencia
  - peliculas por categoria
  - (X) detalle de pelicula
 - url de imagenes
 - storage
  - guardar lista
  - guardar favorito

- Dependencias
 - Material ***

- Modelos
 - basado en nuestros data source
  - modelo categorias
  - modelo peliculas

- Servicios
 - configurar nuestro ambiente
 - reglas de negocio
  - interceptor
  - movies
   - obtener categorias
   - obtener peliculas en tendencia
   - obtener peliculas por categoria
   - (X) obtener detalle de pelicula
   - obtener imagen
   - guardar, borrar, leer de mi lista
   - guardar, borrar, leer de favoritos

- Modulos
 - (x) login
 - Peliculas

- Componentes
 - shared components
  - material (n)
 - Peliculas
  - index
  - menú
  - lista de peliculas
  - detalle de pelicula

- Rutas 
 - home - redirect home categorias
 - home - categorias
  - /:id

- assets

