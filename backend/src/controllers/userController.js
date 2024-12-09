import userService from "../services/userService";


let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await userService.handleUserLogin(email, password);
    //check email co ton tai hay khong?
    //so sanh mat khau nguoi dung truyen -> email nguoi dung khong co trong he thong -> mat khau nguoi dung nhap khong hop le
    // return userInfor
    // access-token: JWT

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id;//ALL, id => co chinh sua


    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            user: []
        })
    }

    let users = await userService.getAllUsers(id);
    // console.log(users)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    })
}

let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);
}


let handleDeleteUser = async (req, res) => {
    // Kiểm tra xem có ID không
    if (!req.body.id) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        });
    }

    try {
        // Gọi hàm xóa người dùng từ userService
        let message = await userService.deleteUser(req.body.id);

        // Trả về phản hồi cho client
        return res.status(200).json(message);
    } catch (error) {
        // Bắt lỗi nếu có vấn đề xảy ra
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from the server',
            error: error.message // Ghi lại lỗi để theo dõi
        });
    }
};

let handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message);
}

let getAllCode = async (req, res) => {
    try {
        let data = await userService.getAllCodeService(req.query.type);
        return res.status(200).json(data);
    }
    catch (e) {
        console.log('Get all code error: ', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
    getAllCode: getAllCode,
}

