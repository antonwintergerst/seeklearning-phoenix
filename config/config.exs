# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :seek_learning,
  ecto_repos: [SeekLearning.Repo]

# Configures the endpoint
config :seek_learning, SeekLearningWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "FoOWZinD5kVQnWyudE1vCReyY5yt8m+4yfxZjngMXL/swlJ14IRlXuPU3APqExSX",
  render_errors: [view: SeekLearningWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: SeekLearning.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Configures React serverside rendering
config :std_json_io,
  pool_size: 10,
  pool_max_overflow: 10,
  script: "assets/node_modules/.bin/react-stdio"

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
