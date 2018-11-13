class Api::TaxonsController < ApplicationController
include HTTParty

def show
    @taxon = HTTParty.get("http://environment.ehp.qld.gov.au/species/?op=getspeciesbyid&taxonid=#{params[:id]}")
    render json: @taxon
end

end
