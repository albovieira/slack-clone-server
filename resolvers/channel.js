/**
 * Created by albo on 30/10/17.
 */
export default {
  Mutation: {
    createChannel: async (parent, args, {models}) => {
      try {
        await models.Channel.create(args)
        return true
      }
      catch (err){
        console.error(err)
        return false
      }
    },
  }
}