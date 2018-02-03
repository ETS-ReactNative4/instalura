export default class TimelineApi {

    static lista(urlPerfil) {
        return dispatch => {
            fetch(urlPerfil)
                .then(response => response.json())
                .then(fotos => {
                    dispatch({ type: 'LISTAGEM', fotos });
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
                    dispatch({ type: 'COMENTARIO', fotoId, novoComentario });
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
                dispatch({ type: 'LIKE', fotoId, liker });
                return liker;
            });
        }
    }
}