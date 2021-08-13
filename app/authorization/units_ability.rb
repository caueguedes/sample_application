# frozen_string_literal: true

class UnitsAbility < Ability
  def initialize(user)
    can :read, Unit
    super
  end
end