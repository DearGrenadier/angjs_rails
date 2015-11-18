class PostsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]

  def index
    @posts = Post.all
    respond_with @posts
  end

  def create
    @post = Post.new(post_params.merge(user_id: current_user.id))
    @post.save
    respond_with @post
  end

  def show
    @post = Post.find(params[:id])
    respond_with @post
  end

  def upvote
    @post = Post.find(params[:id])
    @post.increment!(:upvotes)
    respond_with @post
  end

  private

  def post_params
    params.require(:post).permit(:link, :title, :upvotes)
  end
end
