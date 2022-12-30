var { expressjwt: jwt } = require("express-jwt");
const express = require('express');


const router = express.Router();

router.use(express.json())
// router.use(
//     jwt({
//         secret: secretKey,
//         algorithms: ["HS256"],
//       })
//     .unless(({path: ['/login','/signup']})));



module.exports=router;