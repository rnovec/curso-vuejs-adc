# API Backend

> **API Root** https://adc-spotify-api.herokuapp.com

## User Login

> **GET** /callback?code=AQAgj5zSW8HfWdU0e8gI....

### Query params
| Name | Type  | Description
|---|---|---|
| **code**  | *string*  | Código de autorización devuelto por OAuth de Spotify |


### Response
```json
HTTP/1.0 200 OK

{
    "access_token":"BQDcJpa-mzM12bDO85YV3_vkm6u...q2X29d5KtYikezw-QY43ldjQ",
    "token_type":"Bearer",
    "expires_in":3600,
    "refresh_token":"AQCD1uBOMwE5E0tf1rYA5...ygeE8BwgDEin4s",
    "scope":"user-read-email user-read-private"
}
```
## Search Track

> **GET** /search?q=rock&type=track&offset=0
### Query params
| Name | Type  | Description
|---|---|---|
| **q**  | *string*  | Artista, género, canción a buscar |
| **type**  | *string*  | **track** / **album** / **artist** |
| **offset**  | *number*  | desplazamiento por paginación |


### Response
```json
HTTP/1.0 200 OK

{
    "tracks": {
        "href":"https://api.spotify.com/v1/search?query=f&type=track&offset=0&limit=20",
        "items":[...],
        "limit":20,
        "next":"https://api.spotify.com/v1/search?query=f&type=track&offset=0&limit=20","offset":0,
        "previous":null,
        "total":98
    }
}
```