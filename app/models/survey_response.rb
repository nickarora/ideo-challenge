class SurveyResponse < ApplicationRecord
  has_many :answers

  validates :first_name, presence: true
  validates :last_name, presence: true

  delegate :count, to: :answers, prefix: true

  def completed?
    answers_count == Question.count
  end

  def raw_score_by_quality(creative_quality)
    answers
      .map(&:question_choice)
      .select(&by_quality(creative_quality))
      .sum(&:score)
  end

  private
  def by_quality(creative_quality)
    lambda { |choice| choice.creative_quality == creative_quality }
  end
end
