# fullcycle-docker
Desafios da disciplina Docker do curso Full Cycle.

## Desafio 1
Criar uma imagem docker que contenha uma aplicação Go que imprima no console "Full Cycle Rocks!!". A imagem deve possuir no máximo 2MB.

### Gerando a build
```bash 
docker build -t fullcycle ./desafio-01
```

### Executando a imagem
```bash 
docker run fullcycle
```

### baixando a imagem dockerhub
```bash 
docker pull thiagomarques/fullcycle
```

