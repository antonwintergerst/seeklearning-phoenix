use Mix.Config

# webpack_args = ["node_modules/webpack/bin/webpack.js", "--watch", "--colors",
# "--progress"]
# # Remove progress argument to make iex display log normally
# if IEx.started?, do: webpack_args = List.delete(webpack_args, "--progress")

# config :seek_learning, SeekLearningWeb.Endpoint,
#   http: [port: 4000],
#   debug_errors: true,
#   code_reloader: true,
#   check_origin: false,
#   watchers: [node: ["node_modules/webpack-dev-server/bin/webpack-dev-server.js", "--watch-stdin",  "--color", "--hot",
#                     cd: Path.expand("../assets", __DIR__)]]

webpack_args = [
  "node_modules/webpack/bin/webpack.js",
  "--watch",
  "--colors",
  "--progress",
  cd: Path.expand("../assets", __DIR__)
]

# quieten webpack progress when using IEx
webpack_args = cond do
  IEx.started? ->
    List.delete(webpack_args, "--progress")
  true ->
    webpack_args
end

# watch webpack changes
config :seek_learning, SeekLearningWeb.Endpoint,
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: [node: webpack_args]