class Api::BirdsController < ApplicationController
    include HTTParty

def index
    @birds =  HTTParty.get("https://environment.ehp.qld.gov.au/species/?op=getfamilynames&kingdom=animals&class=aves")
    render json: @birds
end

def show
    @bird = HTTParty.get("http://environment.ehp.qld.gov.au/species/?op=getspecies&family=#{params[:id]}")
    render json: @bird
end

def bird_params
    params.require(:bird).permit(:name, :description, :image)
end


end
