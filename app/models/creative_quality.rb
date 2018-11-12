class CreativeQuality < ApplicationRecord
  has_many :question_choices

  validates :name, :description, :color, presence: true

  def max_score
    question_choices
      .group_by(&:question_id)
      .values
      .map(&highest_score)
      .sum
  end
  
  private

  def highest_score
    lambda { |choice| choice.collect(&:score).max }
  end
end
