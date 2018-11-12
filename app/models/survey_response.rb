class SurveyResponse < ApplicationRecord
  has_many :answers

  validates :first_name, presence: true
  validates :last_name, presence: true

  delegate :count, to: :answers, prefix: true

  def completed?
    answers_count == Question.count
  end
end
