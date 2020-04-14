# require 'rails_helper'

# describe "Histories API", type: :request do
#   it "gets a list of histories" do
#     # Create a new history in the Test Database (not the same one as development)
#     History.create(comment: "Add comment", film_id: 637, 
#     overview: "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.", 
#     release_date: "1997-12-20", title: "Life Is Beautiful", vote_average: 8.5)

#     # Make a request to the API
#     get '/histories'

#     # Convert the response into a Ruby Hash
#     json = JSON.parse(response.json)

#     # Assure that we got a successful response
#     expect(response).to have_http_status(:ok)

#     # Assure that we got one result back as expected
#     expect(json.length).to eq 1
#   end

#   it "creates a history" do
#     # The params we are going to send with the request
#     history_params = {
#       history: {
#         comment: "Add comment", film_id: 637, 
#     overview: "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.", 
#     release_date: "1997-12-20", title: "Life Is Beautiful", vote_average: 8.5
#       }
#     }

#     # Send the request to the server
#     post '/histories', params: history_params

#     # Assure that we get a success back
#     expect(response).to have_http_status(:ok)

#     # Look up the history we expect to be created in the Database
#     new_history = History.first

#     # Assure that the created history has the correct attributes
#     expect(new_history.title).to eq('Life is Beautiful')
#   end
# end
