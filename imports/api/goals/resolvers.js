import Goals from './Goals';

export default {
  Mutation: {
    createGoal(obj, { name, resolutionId }) {
      const goalId = Goals.insert({
        name,
        resolutionId,
        completed: false
      });
      return Goals.findOne(goalId);
    },
    toggleGoal(obj, {_id}) {
      const goal = Goals.findOne(_id);
      goal.completed
      Goals.update(_id, {
        $set: {
          completed: !goal.completed
        }
      });
      return Goals.findOne(_id);
    }
  }
};