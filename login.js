

// ������ �����ͺ��̽��� ����� ��ü
//������ SQR DB�� ��� ����
const users = [
    { username: "admin", password: "adminme" },
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    // ���⿡ �� ���� ����� ���� �߰� ����
];

// �α��� �Լ�
function login() {
    // ����ڰ� �Է��� �� ��������
    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    // �����ͺ��̽����� ����� ���� ã��
    const foundUser = users.find(user => user.username === inputUsername && user.password === inputPassword);

    // ����� ������ ã�Ҵ��� ���� Ȯ��
    if (foundUser) {
        // �α��� ���� �� ����
        alert("�α��� ����! login success!");
        window.location.href = "./welcome.html?username=" + inputUsername; // LOGIN = TRUE,  Send USERNAME URL �Ķ���ͷ� ����
    } else {
        // �α��� ���� �� ����
        alert("�α��� ����. ����� �̸� �Ǵ� ��й�ȣ�� Ȯ���ϼ���. login failed. check your passwd and ID");
    }
}
