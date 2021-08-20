# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    return can :manage, :all  if user&.admin?
  end
end
