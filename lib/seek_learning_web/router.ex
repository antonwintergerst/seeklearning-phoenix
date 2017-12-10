defmodule SeekLearningWeb.Router do
  use SeekLearningWeb, :router
  
  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", SeekLearningWeb do
    pipe_through :browser # Use the default browser stack

    forward "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", SeekLearningWeb do
  #   pipe_through :api
  # end
end
