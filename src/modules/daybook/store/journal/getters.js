// export const myGetter = (state) => {
    //return state.algo
// }

/*Como la función devuelve un array, tiene que invocar a otra función que acepte como parámetro el término de búsqueda */
export const getEntriesByTerm = (state) => (term = '') => {

    //Si la longitud del término es 0, nos devuelve todas las entradas
    if (term.length === 0) return state.entries

    //Si no, devuelvo el arrayque devuelve la función principal filtrado
    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
}

export const getEntryById = (/*state*/) => {

}