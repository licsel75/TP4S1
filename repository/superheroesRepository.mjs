// repository/superheroesRepository.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroesDataSource from './superheroesDataSource.mjs';
import Superheroe from '../models/superheroe.mjs'; // Importamos el modelo

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class SuperheroesFileRepository extends SuperheroesDataSource {
    constructor() {
        super();
        // Construye la ruta absoluta al archivo superheroes.txt en la raíz
        this.filePath = path.join(__dirname, '../superheroes.txt');
    }

    obtenerTodos() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            const superheroesData = JSON.parse(data);
            // Convertimos los objetos planos a instancias de nuestro modelo Superheroe
            return superheroesData.map(heroData => new Superheroe(
                heroData.id,
                heroData.nombreSuperHeroe,
                heroData.nombreReal,
                heroData.nombreSociedad,
                heroData.edad,
                heroData.planetaOrigen,
                heroData.debilidad,
                heroData.poder,
                heroData.habilidadEspecial,
                heroData.aliado,
                heroData.enemigo
            ));
        } catch (error) {
            console.error("Error al leer el archivo de superhéroes:", error);
            return []; // Devolvemos un array vacío si hay error
        }
    }
}