object :@comment
attributes :id, :body, :upvotes
child(:user) do
  attributes :username
end
