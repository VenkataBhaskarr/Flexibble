import { g, auth, config } from '@grafbase/sdk'


const User = g.model('User' , {
  name: g.string(),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  projects:g.relation(() => Project).list().optional()

})

const Project = g.model('Project' ,{
  title: g.string(),
  description: g.string().optional(),
  image : g.url().optional(),
  liveUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  category: g.string().optional().search(),
  createdBy: g.relation(User),
})

export default config({
  schema: g
})
