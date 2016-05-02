json.post do
  json.partial! 'post', post: @post
end
<%= commontator_thread(@commontable) %>
