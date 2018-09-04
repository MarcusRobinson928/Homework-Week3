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
  if (command.toLocaleLowerCase() === 'print'){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
  else if(command.toLocaleLowerCase() === 'verify'){
    const employee = prompt('Enter Employee Name')
    let verify = 'false'
  for (let i = 0; i < employeeList.length; i++){
     if (employee === employeeList[i].name){
      verify = 'true';
      render(verify)
      }
     }
    }
    else if(command.toLocaleLowerCase() === 'lookup'){
      const employee = prompt('Enter Employee Name')
    for (let i = 0; i < employeeList.length; i++){
       if (employee === employeeList[i].name){
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
        }
       }
      }
      else if(command.toLocaleLowerCase() === 'contains'){
        const employee = prompt('Enter Employee Name')
      for (let i = 0; i < employeeList.length; i++){
         if (employeeList[i].includes(element, start) === employee){
          render(employeeList[i].name);
          }
         }
        }
        else if(command.toLocaleLowerCase() === 'update'){
          const employee = prompt('Enter Employee Name')
        for (let i = 0; i < employeeList.length; i++){
           if (employee === employeeList[i].name){
            const field = prompt('What would you like to change?')
            }
           }
          }

          else if(command.toLocaleLowerCase() === 'add'){
              const employeeName = prompt('Enter Employee Name?');
              const officeNum = prompt('Enter Office Number');
              const phoneNum = prompt('Enter Telephone Number');
             var newEmployee = {
                name: employeeName,
                officeNum: officeNum,
                phoneNum: phoneNum,
             }
              
            
              employeeList.push(newEmployee);
            
              for (let i = 0; i < employeeList.length; i++) {
                render(employeeList[i].name);
                render(employeeList[i].officeNum);
                render(employeeList[i].phoneNum);
              }
          } 
              
  }
render(msg);
