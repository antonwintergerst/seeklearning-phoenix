# Seek Learning Setup
This process was used to setup a brand new Phoenix application with serverside rendering of React components. The completion of this process results in an environment that supports quality code through the use of encouraged syntax guidelines, unit tests and continuous delivery.

## Phoenix
Web framework to power the serverside application.

1. Create a new Phoenix application
```
mix phx.new seek_learning
```

## Webpack

Build tool to transpile clientside code into modules.

1. Uninstall brunch and its dependencies
```
cd assets
yarn remove brunch
yarn remove babel-brunch
yarn remove clean-css-brunch
yarn remove uglify-js-brunch
rm brunch-config.js
```
2. Install webpack
```
cd assets
yarn add webpack -D
```
3. Install webpack dependencies
```
cd assets
yarn add babel-preset-env -D
yarn add babel-loader -D
yarn add copy-webpack-plugin -D
yarn add clean-webpack-plugin -D
yarn add extract-text-webpack-plugin -D
yarn add file-loader -D
yarn add json-loader -D
yarn add style-loader -D
yarn add css-loader -D
yarn add node-sass -D
yarn add sass-loader -D
```
4. Configure webpack as per [assets/webpack.config.js](assets/webpack.config.js)
5. Replace webpack with brunch as per [config/dev-webpack.exs](config/dev-webpack.exs)
6. Configure [assets/package.json](assets/package.json) scripts with:
```
"scripts": {
  "deploy": "webpack -p",
  "watch": "webpack --watch-stdin --progress --color",
  "test": "jest --config jest.config.json --watch -u"
},
```
7. Add `dist` to [lib/seek_learning_web/endpoint.ex](lib/seek_learning_web/endpoint.ex)
8. Update assetm script and stylesheet path references in [lib/seek_learning_web/templates/layout/app.html.ex](lib/seek_learning_web/templates/layout/app.html.ex) to use `/dist`

## React

JavaScript framework to power the clientside application.

1. Install react
```
cd assets
yarn add react
```
2. Install react dependencies
```
cd assets
yarn add react-dom
yarn add prop-types
yarn add babel-core -D
yarn add babel-preset-react -D
```

### Serverside rendering

Ensures contents are immediately available on page load.

1. Add the StdJsonIo depenency to [mix.exs](mix.exs):
```
def deps  
  [
    #...
    {:std_json_io, github: "chvanikoff/std_json_io"},
  ]
end  
```
2. Install updated dependencies
```
mix deps.get
```
3. Add ReactIO to [config/config.exs](config/config.exs)
```
# Configures React serverside rendering
config :std_json_io,
  pool_size: 10,
  pool_max_overflow: 10,
  script: "assets/node_modules/.bin/react-stdio"
```
4. Update the page controller index method [lib/seek_learning_web/controllers/page_controller.ex](lib/seek_learning_web/controllers/page_controller.ex):
```
def index(conn, _params) do
  initial_state = %{}
  react_stdio_args = %{
    component: Application.app_dir(:seek_learning, "priv/static/dist/js/server.js"),
    props: %{
      "location" => conn.request_path,
      "initial_state" => initial_state
    }
  }
  {:ok, %{"html" => html}} = StdJsonIo.json_call(react_stdio_args)
  render(conn, "index.html", html: html, initial_state: initial_state)
end
```
5. Update the app layout template body at [lib/seek_learning_web/templates/layout/app.html.ex](lib/seek_learning_web/templates/layout/app.html.ex):
```
<body>
  <%= render @view_module, @view_template, assigns %>
  <script src="<%= static_path(@conn, "/dist/js/app.js") %>"></script>
</body>
```
6. Update the page index template at [lib/seek_learning_web/templates/page/index.html.ex](lib/seek_learning_web/templates/page/index.html.ex):
```
<div id="app"><%= raw @html %></div>
<script>SERVER_STORE=<%= @initial_state |> Poison.encode! |> raw %></script>
```
7. Add the new route in [lib/seek_learning_web/router.ex](lib/seek_learning_web/router.ex)
```
forward "/", PageController, :index
```
8. Fix the circular Router Helpers reference caused by [lib/seek_learning_web.ex](lib/seek_learning_web.ex):
```
def controller do
  quote do
    use Phoenix.Controller, namespace: SeekLearningWeb
    import Plug.Conn
    # Removes circular Router.Helpers reference
    # import SeekLearningWeb.Router.Helpers
    import SeekLearningWeb.Gettext
  end
end
```

9. Install the clientside React Std IO package:
```
cd assets
yarn install react-stdio
```

## Redux & React Router

Singleton store to manage clientside application state.

1. Install Redux and dependencies
```
cd assets
yarn add redux
yarn add redux-thunk
yarn add react-router
yarn add react-router-redux
yarn add babel-preset-stage-2 -D
```
2. Create a Redux store to match [assets/src/Store.jsx](assets/src/Store.jsx)
3. Create the Routes component [assets/src/Routes.jsx](assets/src/Routes.jsx)
4. Wrap the Index component in a Redux container [assets/src/Index.jsx](assets/src/Index.jsx)
5. Create the reducers index [assets/src/reducers/index.js](assets/src/reducers/index.js)

## Jest

Test framework for the clientside application.

1. Install Jest
```
cd assets
yarn add jest -D
```
2. Install Jest dependencies
```
cd assets
yarn add babel-jest -D
yarn add react-test-renderer -D
yarn add babel-preset-es2015 -D
```
3. Create the Jest config [assets/jest.config.json](assets/jest.config.json)
4. Configure babel [assets/.babelrc](assets/.babelrc)
```
{
  "plugins": ["syntax-dynamic-import", "transform-runtime"],
  "presets": [
    [
      "es2015",
      {
        "modules": false
      }
    ],
    "react"
  ],
  "env": {
    "test": {
      "presets": ["es2015", "react"]
    }
  }
}
```

## ESLint

Developer tool to encourage consistent JavaScript syntax.

1. Install ESLint
```
cd assets
yarn add eslint -D
```
2. Install ESLint dependencies
```
cd assets
yarn add eslint-plugin-import -D
# Airbnb JavaScript Style Guide
yarn add eslint-config-airbnb -D
yarn add eslint-config-airbnb-base -D
# React
yarn add eslint-plugin-react -D
yarn add eslint-plugin-jsx-a11y -D
# Jest
yarn add eslint-plugin-jest -D
```
3. Create an config file here [assets/.eslintrc.json](assets/.eslintrc.json) with the following:
```
{
  "extends": "airbnb",
  "env": {
    "jest/globals": true
  },
  "plugins": [
    "jest"
  ]
}
```

## Semantic UI

CSS framework that separates style from markup conventions.

1. Install Semantic UI for React
```
yarn add semantic-ui-react
```
2. Install Semantic UI less dependencies
```
yarn add less -D
yarn add semantic-ui-less -D
yarn add less-loader -D
yarn add autoprefixer -D
yarn add postcss-loader -D
```
3. Create less configuration files
  * [assets/css/site](assets/css/site)
  * [assets/css/app.less](assets/css/app.less)
  * [assets/css/semantic.less](assets/css/semantic.less)
  * [assets/css/theme.config](assets/css/theme.config)