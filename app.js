const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  ,
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const commandList = ['print', 'verify', 'lookup', 'contains', 'update', 'add', 'delete']

const command = prompt('Enter a Command: print, verify, lookup, contains, update, add, or delete')

const msg = 'Not A Valid Command. Try Again.'

for ( let i = 0; i < commandList.length; i++){
  if (command === 'print'){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
  else if(command === 'verify'){
  for (let i = 0; i < employeeList.length; i++){
    const employee = prompt('Enter Employee Name')
     if (employee === employeeList[i])
      render('true')
    }
  }
}
render(msg)

const employee = prompt('Enter Employee Name')
for ( let i = 0; i < commandList.length; i++){
    if(command === 'verify')
     if (employee === employeeList[i])
      render('true')
}