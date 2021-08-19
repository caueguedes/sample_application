module ApplicationHelper
  def page_name
    translate("#{controller_name}.title")
  end

  def links
    links = []
    links << { text: 'Units', link: '/admin/units'}
    links << { text: 'Bottles', link: '/admin/bottles'}
    links << { text: 'Plans', link: '/admin/plans'} if current_user.admin?
  end

  def is_editing
    action_name.in? ['new', 'create', 'update']
  end
end
