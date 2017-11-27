# EndPoints necessários!

### Listagem de Salas

GET `/rooms`

RESPONSE:

```json
{
  "rooms": [
    {
       "name": <String>,
       "queueSize": <Number>
      },
      {
        "name": <String>,
        "queueSize": <Number>
      }
      ...
     ]
}
```

###  Entrar na Sala

POST `/rooms/enter`

REQUEST:

```json
{
  "user": {
    "name": <String>
  }
}
```

RESPONSE:

```json
{
  "room": {
    "id": <Number>,
    "relativeQueue": <Number>
  }
}
```

### Sair da Sala

DELETE `/rooms/:id/users/:id`

### Criar Sala

POST `/rooms`

REQUEST
```json
{
  "room": {
    "description": <String>,
    "openningTime": <String>,
    "finalTime": <String>,
  }
}
```

RESPONSE `HTTP 200`
```json
{
  "room": {
    "description": <String>,
    "openningTime": <String>,
    "finalTime": <String>
  },
  "queue": [
    {
      "name": <String>,
      "position": <Number>
    },
    {
      "name": <String>,
      "position": <Number>
    }
    ...
  ]
}
```


RESPONSE `HTTP 401`
```json
{
  "error": 'True'
}
```

### Apagar sala

DELETE `/rooms/:id`

RESPONSE 200

RESPONSE 404 - not found