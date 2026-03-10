// models/superheroe.mjs

export default class Superheroe {
    constructor(id, nombreSuperHeroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id = id;
        this.nombreSuperHeroe = nombreSuperHeroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder; // Esto es un array
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado; // Esto es un array
        this.enemigo = enemigo; // Esto es un array
    }

    // Podríamos agregar métodos específicos aquí, como validar()
    validar() {
        if (!this.nombreSuperHeroe || this.nombreSuperHeroe.trim() === '') {
            throw new Error('El nombre de superhéroe es obligatorio.');
        }
        // ... más validaciones si quisieras
    }
}