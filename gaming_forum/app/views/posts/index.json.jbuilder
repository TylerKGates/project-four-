json.post @posts do |post|
  json.title recipe.title
  json.id post.id
  json.author post.author
  json.body post.body
  json.like_count post.like_count
end
