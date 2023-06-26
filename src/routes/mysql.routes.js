const { Router } = require("express");
const router = Router();


const { getEmployees,
        addEmployees,
        getEmployeeById,
        DeleteEmployees,
        updateEmployees
    } = require('../controller/api.controller');


router.get("/", getEmployees);

router.get("/:id", getEmployeeById);

router.post("/", addEmployees);

//PUT actauliza todo el registro y PATCH actualiza solo un campo parcialmente 
//router.put("/:id", updateEmployees);

router.patch("/:id", updateEmployees);

router.delete("/", DeleteEmployees);//with query string /api/mysql?id=1
    
    
    
module.exports = router;