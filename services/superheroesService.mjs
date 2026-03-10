// services/superheroesService.mjs

import SuperheroesFileRepository from '../repository/superheroesRepository.mjs';

const repository = new SuperheroesFileRepository();

export function obtenerSuperheroePorId(id) {
    const superheroes = repository.obtenerTodos();
    // El id del archivo es numérico, pero viene como string de la URL, por eso lo parseamos
    return superheroes.find(hero => hero.id === parseInt(id));
}

export function buscarSuperheroesPorAtributo(atributo, valor) {
    const superheroes = repository.obtenerTodos();
    // Filtramos: hero[atributo] existe? y si existe, convertimos a string y comparamos (case insensitive)
    return superheroes.filter(hero => {
        if (hero[atributo] !== undefined) {
            return String(hero[atributo]).toLowerCase().includes(valor.toLowerCase());
        }
        return false;
    });
}

export function obtenerSuperheroesMayoresDe30() {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero =>
        hero.edad > 30 &&
        hero.planetaOrigen.toLowerCase() === 'tierra' && // Aseguramos comparación en minúsculas
        hero.poder.length >= 2
    );
}