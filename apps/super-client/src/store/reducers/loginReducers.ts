import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axios.index";

//  part of state

interface IloginState {
    loginSuccess: boolean
    isLoading: boolean
}

const initialState: IloginState = {
    loginSuccess: false,
    isLoading: false
}


export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoginSuccess: (state, action: PayloadAction<boolean>) => {
            state.loginSuccess = action.payload
        }
    },
    extraReducers(loginBuilder) {
        return getLoginBuilderCases(loginBuilder)
    }
})

function getLoginBuilderCases(builder: ActionReducerMapBuilder<IloginState>) {
    builder.addCase(loginThunkAction.pending, (state, action) => {
        state.isLoading = true;
    }).addCase(loginThunkAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginSuccess = true;
    }).addCase(loginThunkAction.rejected, (state, action) => {
        state.isLoading = false;
        state.loginSuccess = false;
    })
}

export const loginThunkAction = createAsyncThunk("login-api",
    async (obj: { userName: string, password: string }) => {
        try {
            const { data } = await axiosInstance.post("/auth/login", {
                userName: obj.userName, password: obj.password
            })
            const { token } = data;
            window.localStorage.setItem("token", token)
            // reminder to put return type
        } catch (ex) {
            console.log("error", ex)
        }
    })

export const { setLoginSuccess } = loginSlice.actions
export default loginSlice.reducer