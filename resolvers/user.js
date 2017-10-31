/**
 * Created by albo on 30/10/17.
 */
export default {
 Query: {
   getUser: (parnet,{id}, {models}) => models.User.findOne({where: {id} }),
   getAll: (parnet,args, {models}) => models.User.findAll()
 },
 Mutation: {
   createUser: (parent, args, {models}) => models.User.create(args),
 }
}