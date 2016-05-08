class PostsController < ApplicationController

  before_action :authenticate_user!, only: [:create]

  def index
    @posts = Post.all.reverse
    render json: @posts.to_json
  end

  def create
    puts current_user.id
    @posts = Post.new( title: params[:title], author: params[:author], body: params[:body], category: params[:category], like_count: params[:like_count])

    if @posts.save
      puts @posts
      render json: @posts.to_json, status: 201
    else
      render json: {error: "Post could not be created."}, status: 422
    end
  end

  def destroy
    @posts = Post.find(params[:id])
    if @posts.destroy
      render json: {}, status: 200
    else
      render json: {error: "post too good, sry i dont wanna delete"}, status: 422
    end
  end

  def update
    @posts = Post.find(params[:id])
    if @posts.update_attributes(like_count: params[:like_count])
    else
      render json: {error: "can't like this post."}, status: 422
    end
  end

end
