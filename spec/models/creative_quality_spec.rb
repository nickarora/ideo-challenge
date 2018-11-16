require 'rails_helper'

describe CreativeQuality do
  context 'associations' do
    it { is_expected.to have_many(:question_choices) }
  end

  context 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:description) }
  end

  describe 'scores' do
    let(:creative_quality) { create(:creative_quality) }
    
    let(:question_1) { create(:question) }
    let(:question_2) { create(:question) }

    let(:question_choice_1) { create(:question_choice, creative_quality: creative_quality, question: question_1, score: 1) }
    let(:question_choice_2) { create(:question_choice, creative_quality: creative_quality, question: question_1, score: 2) }
    let(:question_choice_3) { create(:question_choice, creative_quality: creative_quality, question: question_2, score: 1) }
    let(:question_choice_4) { create(:question_choice, creative_quality: creative_quality, question: question_2, score: 2)  }
    let(:question_choice_5) { create(:question_choice, creative_quality: creative_quality, score: 3) }

    before do
      creative_quality.question_choices = [
        question_choice_1,
        question_choice_2,
        question_choice_3,
        question_choice_4,
        question_choice_5
      ]
    end

    context '#max_score' do
      it 'calculates the maximum possible score achievable by answering unique questions' do
        result = creative_quality.max_score
        expect(result).to eql(7)
      end
    end

    context '#normalized_score' do
      let(:survey_response_1) { create(:survey_response) }
  
      it 'calculates a normalized score based on survey responses' do
        survey_response_2 = create(:survey_response)

        survey_response_1.answers = [
          create(:answer, question_choice: question_choice_1, survey_response: survey_response_1),
          create(:answer, question_choice: question_choice_2, survey_response: survey_response_1),
          create(:answer, question_choice: question_choice_3, survey_response: survey_response_1),
          create(:answer, question_choice: question_choice_4, survey_response: survey_response_1),
        ]

        survey_response_2.answers = [
          create(:answer, question_choice: question_choice_5, survey_response: survey_response_2),
        ]
        
        result = creative_quality.normalized_score
        expect(result).to eql(64)
      end

      it 'clamps normalized scores to maximum of 100' do
        question_choice = create(:question_choice, creative_quality: creative_quality, question: question_1, score: 1000)

        survey_response_1.answers = [
          create(:answer, question_choice: question_choice, survey_response: survey_response_1),
        ]

        result = creative_quality.normalized_score
        expect(result).to eql(100)
      end

      it 'clamps normalized scores to minimum of -100' do
        question_choice = create(:question_choice, creative_quality: creative_quality, question: question_1, score: -1000)

        survey_response_1.answers = [
          create(:answer, question_choice: question_choice, survey_response: survey_response_1),
        ]

        result = creative_quality.normalized_score
        expect(result).to eql(-100)
      end
    end
  end
end
