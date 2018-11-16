module ApplicationHelper
  def mock_creative_quality_scores
    data = []

    CreativeQuality
      .limit(3)
      .each_with_index do |creative_quality, i|
      data << creative_quality.as_json.merge(
        score: creative_quality.normalized_score
      )
    end

    data
  end
end
