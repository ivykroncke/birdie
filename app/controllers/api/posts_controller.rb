class Api::PostsController < ApplicationController

    def index
        @posts = User.find(params[:user_id]).post
        render json: @posts
    end

    def show
        @user = User.find(params[:user_id])
        @post = @user.post.find(params[:id])
        render json: @post
    end

    def create
        @user = User.find(params[:user_id])
        @post = @user.post.create(post_params)
        render json: @post
    end

    def update
        @user = User.find(params[:user_id])
        @post = @user.post.find(params[:id]).update(post_params)
        render json: @post
    end

    def destroy
        @user = User.find(params[:user_id])
        @post = @user.post.find(params[:id]).delete
        render json: @post
    end

    def post_params
        params.require(:post).permit(:title, :content, :bird_id)
    end
end
