let studentList = [
    {  "id" : 1 ,
      "fullName" : "đỗ anh quân",
      "age" : 20,
      "studentClass": 14 
  },  
  {  "id" : 2 ,
  "fullName" : "nguyễn văn B",
  "age" : 18,
  "studentClass": 12 
  }, 
   {  "id" : 3 ,
  "fullName" : "Lê Thị C",
  "age" : 15,
  "studentClass": 9 
  }
  
    
  ];
const getList = () => {
    if (studentList) {
        return studentList ;
    }
    else {
        return false ;
    }
}  ;

const getStudentt = (id) => {
         // tìm xem có tồn tại học sinh trong mảng không
    const index = studentList.findIndex( (student) => {
        return student.id == id; } );
  
      if (index != -1) 
      {  
        const student = studentList[index];
      return student;
      }
      else {
        return false;
      }

};

const create = (student) => {
    student = {
        id : Math.random(),
        ...student,
       };
       // thêm object mới vào mảng cũ
       studentList = [...studentList, student];
       return student ;


}
update = (id, student) => {
    const index = studentList.findIndex( (student) => {
        return student.id == id });
        if (index !== -1) {
        const oldStudent = studentList[index];
        const newStudent = {...oldStudent, ...student };
        studentList[index] = newStudent;  
       return  newStudent;
    } else {
        return false;
    }

};
deleteS = (id) => {
    const studentToDelete = studentList.find((student) => student.id == id);
    if (studentToDelete) {
    const newlist = studentList.filter( (student) =>student.id != id );
    studentList = [...newlist];
    return studentToDelete;
    }
    else {
      return false;
    }
}
module.exports = {
    getList,getStudentt, create, update, deleteS
}