collection :@posts
attributes :id, :title, :link, :upvotes
child(:user) do
  attributes :username
end
