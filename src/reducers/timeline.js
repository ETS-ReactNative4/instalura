import { List } from 'immutable';

const INITIAL_STATE = {
    list: new List(),
    num: 1
};

function trocaFoto(lista, fotoId, callbackAtualizaPropriedades) {
    const fotoEstadoAntigo = lista.find(foto => foto.id === fotoId);
    const novasPropriedades = callbackAtualizaPropriedades(fotoEstadoAntigo)
    const fotoEstadoNovo = Object.assign({}, fotoEstadoAntigo, novasPropriedades);
    const indicdeDaLista = lista.findIndex(foto => foto.id === fotoId);
    return lista.set(indicdeDaLista, fotoEstadoNovo);
}


export function timeline(state = INITIAL_STATE, action) {

    if (action.type === 'LISTAGEM') {
        return { list: new List(action.fotos), num: 22 };
    }

    if (action.type === 'ADD') {
        return { list: new List(), num: action.num };
    }

    if (action.type === 'COMENTARIO') {
        return trocaFoto(state, action.fotoId, (fotoEstadoAntigo => {
            const novosComentarios = fotoEstadoAntigo.comentarios.concat(action.novoComentario);
            return { comentarios: novosComentarios }
        }));
    }

    if (action.type === 'LIKE') {
        return trocaFoto(state, action.fotoId, (fotoEstadoAntigo => {
            const possivelLiker = fotoEstadoAntigo.likers.find(likerAtual => likerAtual.login === action.liker.login)
            fotoEstadoAntigo.likeada = !fotoEstadoAntigo.likeada;
            let novosLikers;
            if (possivelLiker === undefined) {
                novosLikers = fotoEstadoAntigo.likers.concat(action.liker);
            } else {
                novosLikers = fotoEstadoAntigo.likers.filter(likerAtual => likerAtual.login !== action.liker.login);
            }
            return { likers: novosLikers }
        }));
    }
    return state;
}
