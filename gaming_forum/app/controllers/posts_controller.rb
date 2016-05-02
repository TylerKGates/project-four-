class PostsController < ApplicationController
  # before_action :authenticate_user!, only: [:index]

def index
  render json: Post.all, status:200
end

end
