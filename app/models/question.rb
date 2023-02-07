class Question < ApplicationRecord
  scope :active, -> { where(active: true).first}
end
