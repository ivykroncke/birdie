class Api::BirdsController < ApplicationController

    # Since this will eventually come from the Api
    # We probably don't need update

def index
    @birds = Bird.all
    render json: @birds
end

def show
    @bird = Bird.find(params[:id])
    render json: @bird
end

def create
    @bird = Bird.create(bird_params)
    render json: @bird
end

def delete
    @bird = Bird.destroy(params[:id])
    render status: 200
end

def bird_params
    params.require(:bird).permit(:name, :description, :image:)
end

end
