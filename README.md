# Seek Learning

This is an example Phoenix application with serverside rendering of React components.

## Processes

### Setup

```
mix deps.get
mix ecto.create && mix ecto.migrate
cd assets && yarn install && cd ..
```

### Test

Write tests that fail.

```
cd assets
yarn test
```

### Develop

Correct the tests with functional code.

```
mix phx.server
```

### Deploy

Ship code with Git.

```
git push dokku
```

## Environment prerequisites

* Git
```
brew install git
```
* Elixir (~1.5.2)
```
brew install elixir
```
* Hex (~0.17.1)
```
mix local.hex
```
* Phoenix (~1.5.2)
```
mix archive.install https://github.com/phoenixframework/archives/raw/master/phoenix_new.ez
```
* Node.js (~9.1.1)
```
brew install node
```
* Yarn (~1.3.2)
```
brew install yarn
```
* PostgreSQL server such as Postgres.app: http://postgresapp.com/
* Text editor such as VSCode: https://code.visualstudio.com/

## Learn more

### Setup

View the [README_SETUP.md](README_SETUP.md) For detailed technical documentation on how this application was setup.

### Phoenix

* Official website: http://www.phoenixframework.org/
* Guides: http://www.phoenixframework.org/docs/overview
* Source: https://github.com/phoenixframework/phoenix

### React

* Official website: https://reactjs.org/
* Guides: https://reactjs.org/docs/
* Source: https://github.com/facebook/react

### React/Phoenix serverside rendering

* Guide: http://blog.overstuffedgorilla.com/render-react-with-phoenix