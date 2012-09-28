module ApplicationHelper
  def is_sample_user?
    current_user.email == "sample@kpt.list"
  end
end
