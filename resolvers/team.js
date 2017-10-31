/**
 * Created by albo on 30/10/17.
 */
export default {
  Mutation: {
    createTeam: async (parent, args, {models, user}) => {
      try {
        await models.Team.create({ ...args, owner: user.id})
        return true
      }
      catch (err){
        console.error(err)
        return false
      }
    },
  }
}