json.post @posts do |post|
  json.title post.title
  json.id post.id
  json.author post.author
  json.body post.body
  json.like_count post.like_count
  json.user_id post.user_id
end
