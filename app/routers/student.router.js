const express = require('express');
const studentRouter = express.Router();
const { getStudentList , getStudent , postStudent, updateStudent, deleteStudent} = require('../controllers/student.controllers')
studentRouter.use(express.json());
const {checkEmty, checkClass} = require('../middleware/validations/student.validation')


// lấy danh sách học sinh http://localhost:3000/students
studentRouter.get ('/', getStudentList);
// lấy thông tin chi tiết học sinh http://localhost:3000/students/id
studentRouter.get('/:id', getStudent);
// thêm học sinh  http://localhost:3000/students
studentRouter.post('/' ,checkEmty ,checkClass ,postStudent );
// update học sinh
studentRouter.put( '/:id', updateStudent);
studentRouter.delete( '/:id',  deleteStudent)

module.exports  = studentRouter;
