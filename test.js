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
  



  const print = function(){
    $('#content').empty();
    $('#input').empty();
    $('#board').empty();
      for (let i = 0; i < employeeList.length; i++){
      $('#content').append(
        `<p>${employeeList[i].name}</p>
        ${employeeList[i].officeNum}</br>
        ${employeeList[i].phoneNum}</br>
        <br></br>`)
    }
  }

  const verifyInput = function(){
    $('#content').empty();
    $('#input').empty();
    $('#input2').empty();
    $('#board').empty();
    $('#board2').empty();
    $('#input').append(`
    <input type="text" id="verify-input" placeholder="Enter Name" autocomplete="off" />
    <button id="verifyButton">Verify</button>`);
    $('#verifyButton').on('click', verify);
  }
  
  const verify = function(){
    $('#board').empty();
    const input = $('#verify-input').val();
    let msg = 'Employee Not Found'
    for (let i = 0; i < employeeList.length; i++){
       if (input === employeeList[i].name){
      msg = 'Employee Found'}
  }
  $('#board').append(msg)
  }

$('#print').on('click', print);
$('#verify').on('click', verifyInput);