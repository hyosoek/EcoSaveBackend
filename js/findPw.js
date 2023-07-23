const initBtnEvent = () =>{
    document.getElementById("findBtn").onclick = findID
}

const findID = async() =>{
    const idInput = document.getElementById("idInput").value
    const nameInput = document.getElementById("nameInput").value
    const mailInput = document.getElementById("mailInput").value
    const response = await fetch(`/account/certification?id=${idInput}&name=${nameInput}&mail=${mailInput}`);
    const result = await response.json();
    console.log(result)

    if(result.success == true){
        document.getElementById("resultPw").innerText = "인증완료되었습니다"
        document.getElementById("idInput").disabled = true;
        document.getElementById("nameInput").disabled = true;
        document.getElementById("mailInput").disabled = true;
        changePwEvent(result.usernum)
    }
    else{
        document.getElementById("resultPw").innerText = "존재하지 않는 아이디입니다"
    }
}

const changePwEvent = (usernum)=>{
    for(let i = 1 ; i <= 2 ;i++){
        const pw = document.createElement("input")
        pw.id = "pw"+i
        pw.type = "password"
        document.getElementById("changePwArea").appendChild(pw)
    }
    const changePwBtn = document.createElement("input")
    changePwBtn.id = "changePwBtn"
    changePwBtn.type = "button"
    changePwBtn.value = "변경하기"
    document.getElementById("changePwArea").appendChild(changePwBtn)
    console.log(usernum)
    changePwBtn.addEventListener('click', changePw(usernum))
}

const changePw = (usernum) =>{
    return async function(event) {
        const response = await fetch("/account/modify-pw",{// get빼고 이거 3개는 전부 이렇게 해주기 //Get은 body를 못 넣어줌
            "method" : "PUT",
            "headers":{
                "Content-Type":"application/json"
            },
            "body":JSON.stringify({
                "usernum": usernum,
                "newpw1": document.getElementById("pw1").value,
                "newpw2": document.getElementById("pw2").value
            })
        }) 
        const result = await response.json();
        if(result.success == true){
            alert("변경완료")
            window.location.href = '/loginPage'
        }
        else{
            alert(result.message)
        }
    }
}

initBtnEvent()