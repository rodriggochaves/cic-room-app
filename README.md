# EndPoints necessários!

### Listagem de Salas

GET `/rooms`

RESPONSE:

```json
{
	rooms: [
		{
			 name: <String>,
		     queueSize: <Number>
	    },
	    {
		    name: <String>,
	        queueSize: <Number>
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
	user: {
		name: <String>
	}
}
```

RESPONSE:

```json
{
	room: {
		id: <Number>
		relativeQueue: <Number>
	}
}
```

### Sair da Sala

DELETE `/rooms`

```json
{
	user: {
		id: <Number>
	}
}
```

### Criar Sala

POST `/rooms`

REQUEST
```json
{
	room: {
		description: <String>,
		openningTime: <String>,
		finalTime: <String>,
		password: <String>
	}
}
```

RESPONSE `HTTP 200`
```json
{
	room: {
		description: <String>,
		openningTime: <String>,
		finalTime: <String>
	}
	queue: [
		{
			name: <String>,
			position: <Number>
		}
		{
			name: <String>,
			position: <Number>
		}
		...
	]
}
```


RESPONSE `HTTP 401`
```json
{
	error: 'True'
}
```