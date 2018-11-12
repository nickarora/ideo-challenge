require 'rails_helper'

describe SurveyResponse do
  context 'associations' do
    it { is_expected.to have_many(:answers) }
  end

  context 'validations' do
    it { is_expected.to validate_presence_of :first_name }
    it { is_expected.to validate_presence_of :last_name }
  end

  describe '#completed?' do
    let(:survey_response) { build(:survey_response) }

    before do
      allow(Question).to receive(:count).and_return(3)
      allow(survey_response).to receive_message_chain(:answers, :count)
        .and_return(survey_response_count)
    end

    context 'when no responses exist' do
      let(:survey_response_count) { 0 }

      it 'is false' do
        expect(survey_response.completed?).to be(false)
      end
    end

    context 'when some responses exist' do
      let(:survey_response_count) { 1 }

      it 'is false' do
        expect(survey_response.completed?).to be(false)
      end
    end

    context 'when responses exist for all questions' do
      let(:survey_response_count) { 3 }

      it 'is true' do
        expect(survey_response.completed?).to be(true)
      end
    end
  end

  describe '#raw_score_by_quality' do
    let(:survey_response) { create(:survey_response) }

    let(:creative_quality_1) { create(:creative_quality) }
    let(:creative_quality_2) { create(:creative_quality) }

    let(:question_choice_1) { create(:question_choice, creative_quality: creative_quality_1, score: 1) }
    let(:question_choice_2) { create(:question_choice, creative_quality: creative_quality_1, score: 10) }
    let(:question_choice_3) { create(:question_choice, creative_quality: creative_quality_2, score: 100) }

    let(:answer_1) { create(:answer, question_choice: question_choice_1) }
    let(:answer_2) { create(:answer, question_choice: question_choice_2) }
    let(:answer_3) { create(:answer, question_choice: question_choice_3) }

    before do
      survey_response.answers = [
        answer_1,
        answer_2,
        answer_3
      ]
    end

    it 'totals the scores of answers with a given creative quality' do
      total_1 = survey_response.raw_score_by_quality(creative_quality_1)
      total_2 = survey_response.raw_score_by_quality(creative_quality_2)
      
      expect(total_1).to eql(11)
      expect(total_2).to eql(100)
    end
  end
end
