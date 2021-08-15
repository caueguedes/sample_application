# frozen_string_literal: true

class UnitsAbility < Ability
  def initialize(user)
    super
    return can :manage, Unit, id: user.unit_id if user.staff?
    can :read, Unit
  end
end