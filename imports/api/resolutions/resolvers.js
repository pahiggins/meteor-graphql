import Resolutions from './Resolutions';
import Goals from '../goals/Goals';

export default {
  Query: {
    resolutions(obj, args, { userId }) {
      return Resolutions.find({
        userId
      }).fetch();
    }
  },
  Resolution: {
    goals: resolution => 
      Goals.find({
        resolutionId: resolution._id
      }).fetch(),
    completed: resolution => {
      const goals = Goals.find({
        resolutionId: resolution._id,
        completed: false
      }).fetch();

      return !goals.length;
    }
  },
  Mutation: {
    createResolution(obj, { name }, { userId }) {
      const resolutionId = Resolutions.insert({
        name,
        userId
      });
      return Resolutions.findOne(resolutionId);
    }
  }
};