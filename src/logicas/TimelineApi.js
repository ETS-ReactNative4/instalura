import { listagem, comentario, like, notifica, add } from "../actions/actionCreator"

export default class TimelineApi {

    static add(num) {
        return dispatch => {
            console.log(num)
            num += 1;
            dispatch(add(num));
            return num;
        }
    }

    static pesquisa(login) {
        return dispatch => {
            fetch(`http://localhost:8080/api/public/fotos/${login}`)
                .then(response => response.json())
                .then(fotos => {
                    if (fotos.length === 0) {
                        dispatch(notifica('usuário não encontrado'));
                    } else {
                        dispatch(notifica('usuario encontrado'));
                    }
                    dispatch(listagem(fotos));
                    return fotos;
                });
        }
    }


    static lista(urlPerfil) {
        return dispatch => {
            fetch(urlPerfil)
                .then(response => response.json())
                .then(fotos => {
                    dispatch(listagem(fotos));
                    return fotos;
                });
        }
    }

    static comenta(fotoId, texto) {
        return dispatch => {
            const requestInfo = {
                method: 'POST',
                body: JSON.stringify({ texto }),
                headers: new Headers({
                    'Content-type': 'application/json'
                })
            };
            fetch(`http://localhost:8080/api/fotos/${fotoId}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, requestInfo)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Erro ao dar o comentar");
                    }
                }).then(novoComentario => {
                    dispatch(comentario(fotoId, novoComentario));
                    return novoComentario;
                });
        }
    }

    static like(fotoId) {
        return dispatch => {
            fetch(`http://localhost:8080/api/fotos/${fotoId}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, {
                method: 'POST'
            }).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Erro ao dar o LIKE");
                }
            }).then(liker => {
                dispatch(like(fotoId, liker));
                return liker;
            });
        }
    }
}