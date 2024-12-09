import actionTypes from "./actionTypes";
import { getAllCodeService, createNewUserService, getAllUsers, deleteUserService, editUserService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService } from "../../services/userService";
import { ImportsNotUsedAsValues } from "typescript";
import { toast } from "react-toastify";
import { dispatch } from "../../redux";

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllCodeService("GENDER");
            console.log("Gender response:", res);
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            }
            else {
                dispatch(fetchGenderFailed());
            }
        }
        catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error', e)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})



export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            }
            else {
                dispatch(fetchPositionFailed());
            }
        }
        catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionFailed error', e)
        }
    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            }
            else {
                dispatch(fetchRoleFailed());
            }
        }
        catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleFailed error', e)
        }
    }
}

// export const createNewUser = (data) => {
//     return async (dispatch, getState) => {
//         try {
//             let res = await createNewUserService(data);
//             if (res && res.errCode === 0) {
//                 toast.success('Create a new user succeed!')
//                 dispatch(saveUserSuccess());
//                 dispatch(fetchAllUsersStart());
//             }
//             else {
//                 dispatch(saveUserFailed());
//             }
//         }
//         catch (e) {
//             dispatch(saveUserFailed());
//             console.log('saveUserFailed error', e)
//         }
//     }
// }
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log("Create user response:", res);  // Log response from service
            if (res && res.errCode === 0) {
                toast.success('Create a new user succeed!')
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailed());
                console.log("Create user failed", res);  // Log failure response
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed error', e);
        }
    }
}
export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
//test

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED,
});

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            // let res1 = await getTopDoctorHomeService(3);
            // console.log('Check res get top doctor ', res1)
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            }
            else {
                toast.error("Fetch all users error!");
                dispatch(fetchAllUsersFailed());
            }
        }
        catch (e) {
            toast.error("Fetch all users error!")

            dispatch(fetchAllUsersFailed());
            console.log("FetchAllUsersFailed error", e)
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("Delete the user succeed!");
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart());
            }
            else {
                toast.error("Delete the user error!")
                dispatch(deleteUserFailed());
            }
        }
        catch (e) {
            toast.error("Delete the user error!");
            dispatch(deleteUserFailed());
            console.log('saveUserFailed error', e)
        }
    }

}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        console.log("Data passed to editUserService:", data);
        try {
            let res = await editUserService(data);
            console.log("Response from editUserService:", res);
            if (res && res.errCode === 0) {
                toast.success("Update the user succeed!");
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            }
            else {
                toast.error("Update the user error!");
                dispatch(editUserFailed());
            }
        }
        catch (e) {
            toast.error("Update the user error!");
            dispatch(editUserFailed());
            console.log('EditUserFailed error', e)
        }
    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            console.log('API Response:', res); //check res từ api
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            }
            else {
                console.error('API error:', res);  // Log nếu API không trả về errCode 0
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED
                })
            }
        }
        catch (e) {
            console.log('fetch_top_doctors_failed', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED
            })
        }
    }
}

export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            console.log('API Response:', res); //check res từ api
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            }
            else {
                console.error('API error:', res);  // Log nếu API không trả về errCode 0
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED
                })
            }
        }
        catch (e) {
            console.log('fetch_all_doctors_failed', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED
            })
        }
    }
}

// export const saveDetailDoctor = (data) => {
//     return async (dispatch, getState) => {
//         try {
//             let res = await saveDetailDoctorService(data);
//             console.log('API Response:', res); //check res từ api
//             if (res && res.errCode === 0) {
//                 toast.success('Save infor detail doctor succeed!')

//                 dispatch({
//                     type: actionTypes.SAVE_DETAIL_DOCTORS_SUCCESS,
//                 })
//             }
//             else {
//                 console.log('thuanle res', res)
//                 toast.error('Save infor detail doctor error!')
//                 dispatch({
//                     type: actionTypes.SAVE_DETAIL_DOCTORS_FAILED
//                 })
//             }
//         }
//         catch (e) {
//             toast.error('Save infor detail doctor error!')

//             console.log('SAVE_DETAIL_DOCTORS_FAILED', e)
//             dispatch({
//                 type: actionTypes.SAVE_DETAIL_DOCTORS_FAILED
//             })
//         }
//     }
// }
export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {

        console.log("Data to be sent to API:", data);
        try {
            console.log('Data to be sent to API:', data); // Kiểm tra data trước khi gửi

            let res = await saveDetailDoctorService(data);
            console.log('API Response:', res); // Kiểm tra response từ API

            if (res && res.errCode === 0) {
                toast.success('Save infor detail doctor succeed!')

                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTORS_SUCCESS,
                })
            }
            else {
                console.log('thuanle res', res)
                toast.error('Save infor detail doctor error!')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTORS_FAILED
                })
            }
        }
        catch (e) {
            toast.error('Save infor detail doctor error!')
            console.log('SAVE_DETAIL_DOCTORS_FAILED', e)
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTORS_FAILED
            })
        }
    }
}

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            }
            else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
                })
            }
        }
        catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILED', e)
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
            })
        }
    }
}

export const getRequiredDoctorInfor = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START })

            let resPrice = await getAllCodeService("PRICE");
            let resPayment = await getAllCodeService("PAYMENT");
            let resProvince = await getAllCodeService("PROVINCE");

            if (resPrice && resPrice.errCode === 0 &&
                resPayment && resPayment.errCode === 0 &&
                resProvince && resProvince.errCode === 0) {
                let data = {
                    resPrice: resPrice.data,
                    resPayment: resPayment.data,
                    resProvince: resProvince.data
                }
                dispatch(fetchRequiredDoctorInforSuccess(data))
            }
            else {
                dispatch(fetchRequiredDoctorInforFailed());
            }
        }
        catch (e) {
            dispatch(fetchRequiredDoctorInforFailed());
            console.log('fetchGenderStart error', e)
        }
    }
}
export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData
})

export const fetchRequiredDoctorInforFailed = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED,
})