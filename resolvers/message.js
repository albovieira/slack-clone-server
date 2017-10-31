/**
 * Created by albo on 30/10/17.
 */
export default {
  Mutation: {
    createMessage: async (parent, args, {models, user}) => {
      try {
        await models.Channel.create({
          ...args,
          userId: user.id
        })
        return true
      }
      catch (err){
        console.error(err)
        return false
      }
    },
  }
}