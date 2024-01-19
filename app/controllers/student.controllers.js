const express = require('express');

const { getList, getStudentt, create, update, deleteS} = require("../services/student.services");

const getStudentList = ('/', (req , res) => {
  const studentList = getList();  

  if (studentList) {
    res.status(200).send(studentList);
  }
    else 
    {
      res.status(404).send('lỗi');
    }
});
// laasy thong tin chi tiet hs
const getStudent = (req, res) => {
    const params = req.params;
    const id = params.id ;
    const student = getStudentt(id);
    if (student ) 
    {  
    res.status(200).send(student);
    }
    else {
      res.status(400).send("not found!");
    }
};
// them hoc sinh
const postStudent = (req, res ) => {
    let student = req.body;
  const postStudentt = create(student);
     res.status(201).send(postStudentt);

};
// update hs
const updateStudent = (req, res ) => {
    const { id } = req.params;
    const student = req.body;
    const updateS = update(id, student);
    
    if (updateS) {
      res.status(201).send(updateS);
    }
    else {
      res.status(400).send("not found!");
    }


  
  };
  //delete hs
  const deleteStudent =  (req, res ) => {
    const {id}  = req.params;
    const delete_temp = deleteS(id);
    if (delete_temp) {
      res.status(201).send("delete student : " + JSON.stringify(delete_temp));
    }
    else {
      res.status(404).send("không tồn tại học sinh ");
    }
  }



module.exports = {
    getStudentList , getStudent,postStudent, updateStudent, deleteStudent
};