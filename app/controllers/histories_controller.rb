class HistoriesController < ApplicationController
    # before_action :set_history, only: [:show, :edit, :update, :destroy]    
    # before_action :authenticate_user!    
    # skip_before_action :verify_authenticity_token
    def index

        @histories = History.all
        render json: @histories
    end

    # def create        
    #     @history = current_user.histories.new(history_params)       
    #     respond_to do |format|          
    #         if @history.save               
    #             format.html { redirect_to @history, notice: 'comment was saved.' }                
    #             format.json { render :show, status: :created, location: @history }            else               
    #             format.html { render :new }                
    #             format.json { render json: @history.errors, status: :unprocessable_entity }
    #         end
    # end

    def show
        @history = History.find(params[:id])
        render json: @history
    end

    def edit
        @history = History.find(params[:id])
    end

    def update
        @history = History.find(params[:id])
        @history.update(params.require(:history).permit(:decision, :kind, :link, :is_favorite, :comment))
        redirect_to histories_path(@history)
    end

    def destroy
        @history = History.find(params[:id])
        @history.destroy
        redirect_to histories_path
    end
end
