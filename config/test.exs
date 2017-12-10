use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :seek_learning, SeekLearningWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :seek_learning, SeekLearning.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "seek_learning_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
