

// 가상의 데이터베이스로 사용할 객체
//지금은 SQR DB를 사용 안함
const users = [
    { username: "admin", password: "adminme" },
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    // 여기에 더 많은 사용자 정보 추가 가능
];

// 로그인 함수
function login() {
    // 사용자가 입력한 값 가져오기
    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    // 데이터베이스에서 사용자 정보 찾기
    const foundUser = users.find(user => user.username === inputUsername && user.password === inputPassword);

    // 사용자 정보를 찾았는지 여부 확인
    if (foundUser) {
        // 로그인 성공 시 동작
        alert("로그인 성공! login success!");
        window.location.href = "./welcome.html?username=" + inputUsername; // LOGIN = TRUE,  Send USERNAME URL 파라미터로 전달
    } else {
        // 로그인 실패 시 동작
        alert("로그인 실패. 사용자 이름 또는 비밀번호를 확인하세요. login failed. check your passwd and ID");
    }
}
