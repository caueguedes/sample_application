class PlansAbility < Ability
  def initialize(user)
    super
    return if user.staff?
    can :read, Plan
  end
end