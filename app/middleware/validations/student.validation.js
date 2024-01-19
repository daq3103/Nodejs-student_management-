const checkEmty = (req, res, next) => {
  const {fullName, age, studentClass} = req.body;

if (fullName && age && studentClass) {
  next();
}
else {
    res.status(422).send("không được để trống");
}
};

const checkClass = (req, res, next) => {
    const {studentClass} = req.body;
   if (studentClass <= 12 && studentClass >= 1)
   {
    next();
   }
   else {
    res.status(400).send("lớp phải có giá trị phải từ 1 đến 12");
   }
}
module.exports = { checkEmty, checkClass}