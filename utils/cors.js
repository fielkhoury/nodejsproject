// module.exports = (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, GET, DELETE, POST, PATCH');
//         return res.status(statusCode).json({});
//     }
//     next();
// }