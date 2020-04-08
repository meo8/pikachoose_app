class HistoriesController < ApplicationController
    def index
        @histories = History.all
        render json: @histories
    end
    
    def show
        @history = History.find([params[:id]])
        render json: @history
    end
end
