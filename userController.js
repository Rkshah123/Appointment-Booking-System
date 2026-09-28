const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Mysql@#123',
    database: 'testDB'
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err.message);
        return;
    }

    console.log("Controller database connected");
});

const createUser = (req, res) => {

    const { name, email, phone, appointmentDate, appointmentTime } = req.body;

    const sql = `
        INSERT INTO User
        (name, email, phone, appointmentDate, appointmentTime)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, phone, appointmentDate, appointmentTime],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Failed to insert user",
                    error: err.message
                });
            }

            res.status(201).json({
                message: "User inserted successfully",
                id: result.insertId
            });
        }
    );
};

const getUsers = (req, res) => {

    const sql = 'SELECT * FROM User';

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch users",
                error: err.message
            });
        }

        res.json(result);
    });
};

const deleteUser = (req, res) => {

    const id = req.params.id;

    const sql = 'DELETE FROM User WHERE id = ?';

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to delete user",
                error: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted successfully"
        });
    });
};

module.exports = {
    createUser,
    getUsers,
    deleteUser
};