import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axios.index";


//  part of state

interface ILoginState {
    login: string,
    isLoading: boolean
}

const initialState: ILoginState = {
    isLoading: false,
    login: ""
}



export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<Array<any>>) => {
            state.login = "login"
        }

    },
    extraReducers(builder: any) {
        return getBuilderCases(builder);
    },
})

function getBuilderCases(builder: ActionReducerMapBuilder<ILoginState>) {
    return builder
        .addCase(loginApi.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(loginApi.rejected, (state, action) => {
            state.isLoading = false;
            state.login = null as any;
        })
        .addCase(loginApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.login = action.payload;
        });
}
export const loginApi = createAsyncThunk(
    "login-api",
    async (obj: any) => {
        try {
            const { data } = await axiosInstance.post("/auth/login", {
                userName: obj.userName, password: obj.password
            })
            const { token } = data;
            window.localStorage.setItem("token", token)
            return token;
        } catch (ex) {
            console.log("error", ex)
        }
    }
);


export const { setLogin } = loginSlice.actions
export default loginSlice.reducer