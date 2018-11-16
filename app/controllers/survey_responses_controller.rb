class SurveyResponsesController < ApplicationController
  def show
    @creative_qualities = CreativeQuality.all.includes(:question_choices)
    @survey_response = SurveyResponse
    .includes(
      answers: [
        question_choice: [
          question: :question_choices
        ]
      ]
    )
    .find(params[:id])
    .decorate
  end

  def index
    @survey_responses = SurveyResponse.all.decorate
  end
end
