defmodule Runner do
  def run(document) do
    Absinthe.run(document, Schema, variables: %{})
  end
end
