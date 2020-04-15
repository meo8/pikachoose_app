class ApplicationController < ActionController::Base
    #before devise action- store location before user signs in
    before_action :store_user_location!, if: :storable_location?
    before_action :authenticate_user!
    skip_before_action :verify_authenticity_token
    
    private
    #gets stored location
    def storable_location?
      request.get? && is_navigational_format? && !devise_controller? && !request.xhr? 
    end
  
    def store_user_location!
      # :user is the scope we are authenticating
      store_location_for(:user, request.fullpath)
    end
end
