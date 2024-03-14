// importing json server package
const jsonServer=require('json-server')

// creating server using create() method from json-server
const server=jsonServer.create();

// generating path/route  to server resource
const router=jsonServer.router('db.json');

// initializing json-server middleware
const middleware=jsonServer.defaults();

// creating port no. for server
const PORT=3000;

// implimenting middleware to server
server.use(middleware);
// implimenting route to resourse to server
server.use(router);

// run cammand for server
server.listen(PORT,()=>{console.log("server running successfully")})