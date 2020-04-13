RSpec.describe History, type: :model do
  it "should validate comment" do
    history = History.create
    expect(history.errors[:comment]).to_not be_empty
  end
end