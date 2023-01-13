defmodule Resolvers.Content do
  def list_posts(_parent, _args, _resolution) do
    {:ok, [%{ body: "My post has incredible content", title: "My Awesome Post"}]}
  end

end
