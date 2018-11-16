require 'rails_helper'

describe SurveyResponseDecorator do
  describe '#display_name' do
    let(:survey_response) { create(:survey_response).decorate }

    it 'concatenates the first and last name' do
      expect(survey_response.display_name).to eql(
        [
          survey_response.first_name,
          survey_response.last_name
        ].join(' ')
      )
    end
  end
end
