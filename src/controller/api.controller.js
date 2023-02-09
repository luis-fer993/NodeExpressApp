const { pool } = require('../db/db');

const getEmployees = async (req, res) => {
    try {
        const [rows]= await pool.query("Select * from employee");
        res.json(rows);
    } catch (error) {
        res.status(500).json({message: "Something goes wrong"});
    }
};

const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query("Select * from employee WHERE id = ?", [id]);
        
        if (rows.length <=0) return res.status(404).json({message: "Employee not found"});
    
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({message: "Something goes wrong"});
    } 
};


const addEmployees = async (req, res) => {
    const { phone,name,salary } = req.body;
    try {
        const [rows] = await pool.query("INSERT INTO employee (name, salary, phone) VALUES (?,?,?)" , [name, salary, phone]); 
        res.send({
            id: rows.insertId,
            name,
            salary,
            phone
            });
    } catch (error) {
        res.status(500).json({message: "Something goes wrong"});
    }
};


const DeleteEmployees = async (req, res) => {
    // /api/mysql?id=1
    const { id } = req.query;
    try {
        const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [id]); 
        
        if (result.affectedRows <=0) return res.status(404).json({message: "Employee not found"});

        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: "Something goes wrong"});
    }
};


const updateEmployees = async (req, res) => {
    const { id } = req.params;
    const { name, salary, phone } = req.body;
    try {    
        const [result] = await pool.query("UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary), phone = IFNULL(?, phone) WHERE id = ?", [name, salary, phone, id]);

        /* IFNULL(dato, valorXdefecto), es utilizado para actaulizar datos parcialmente solo cuando, el dato no es nulo */

        if (result.affectedRows <= 0) return res.status(404).json({ message: "Employee not found" });
        
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

        res.send(rows[0]);
    } catch (error) {
        res.status(500).json({message: "Something goes wrong"});
    }
};

module.exports = {
    getEmployees,
    getEmployeeById,
    addEmployees,
    DeleteEmployees,
    updateEmployees
};
