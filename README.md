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

### baixando a imagem do dockerhub

```bash
docker pull thiagomarques/fullcycle
```

## Desafio 2

Utilizar o Nginx para fazer um proxy reverso para usa aplicação NodeJS.

A aplicação deve adicionar um registro com nome na tabela `people` de um banco de dados MySQL e retornar o nome `Full Cycle Rocks!` com a lista de nomes cadastrados na base de dados.

Deve-se usar o `docker-compose` e a aplicação rodar executando apenas o comando: `docker-compose up -d`

### Gerando a build e subindo a aplicação

```bash
cd desafio-02
docker compose up -d --build
```

ou

```bash
docker compose -f ./desafio-02/docker-compose.yaml up -d --build
```

### Encerrando os containers

```bash
docker compose down
```

### Outros comandos

Acessando o host banco de dados:

```bash
docker exec -it db bash
```

Acessando ao mysql

```bash
mysql -uroot -p
```
