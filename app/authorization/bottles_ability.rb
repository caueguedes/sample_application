class BottlesAbility < Ability
  def initialize(user)
    can :read, Bottle
    can :manage, Bottle, unit_id: user.unit_id
    super
  end
end