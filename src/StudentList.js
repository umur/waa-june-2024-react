const studentList = [{ id: 1, fullName: "Darkhan Zhursin" }];

export default function StudentList() {
  const listItems = studentList.map((student) => (
    <li key={student.id}>{student.fullName}</li>
  ));
  return <ol>{listItems}</ol>;
}
