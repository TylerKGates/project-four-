class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def create
    @posts = Post.new( title: params[:title], author: params[:author], body: params[:body], like_count: params[:like_count])

    if @posts.save
      render json: @posts.to_json, status: 201
    else
      render json: {error: "Post could not be created."}, status: 422
    end
  end

end