const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('db.json')
const middlewares = jsonserver.defaults()

server.use(middlewares)
server.use(jsonserver.rewriter({
	'/project/process':'/p_process',
	'/user/login': '/u_login',
	'/user/updatePassword':'/u_updatePassword',
	'/user/logout':'/u_logout',
	'/home/notes':'/h_notes',
	'/home/todos': '/h_todo'
}))
server.use(router)
server.listen(9090, () => {
	console.log("json server is running")
})