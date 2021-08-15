class BottlesAbility < Ability
  def initialize(user)
    super
    return can :manage, Bottle, unit_id: user.unit_id if user.staff?
    can :read, Bottle
  end
end