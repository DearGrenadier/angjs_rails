object :@post
attributes :id, :title, :link, :upvotes
child(:user) do
  attributes :username
end
child(:comments) do
  attributes :id, :body, :upvotes
  child(:user) do
    attributes :username
  end
end
