class FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  # skip_before_action :verify_authenticity_token

  def index
    @favorites = Favorite.all
    render json: @favorites
  end

  def create
    @favorite = current_user.favorites.new(favorite_params)
    respond_to do |format|
      if @favorite.save
          format.html { redirect_to @favorite, notice: 'Decision has been saved to favorite.' }
          format.json { render :show, status: :created, location: @favorite }
      else
          format.html { render :new }
          format.json { render json: @favorite.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
    @favorite = Favorite.find(params[:id])
    render json: @favorite
  end

  # def edit
  #  @favorite = Favorite.find(params[:id])
  # end

  def update
    @favorite = Favorite.find(params[:id])
    @favorite.update(favorite_params)
    # update method was in loop
    # render what we just updated
    render json: @favorite
    # redirect_to favorite_path(@favorite)
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    redirect_to favorites_path
  end

  private

  def favorite_params
    params.require(:favorite).permit(:comment, :film_id, :title, :overview, :vote_average, :release_date)
  end

  def set_favorite
    @favorite = Favorite.find(params[:id])
  end

end


