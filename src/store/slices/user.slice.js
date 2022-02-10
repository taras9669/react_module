import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    users:[
        {id:1, name:'Oleg', surname:'Kos'},
        {id:2, name:'Anna', surname:'Kuziv'},
        {id:3, name:'Ivan', surname:'Gutiv'}
    ]
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        addUser:(state, action) => {
            const user = action.payload.user;
            state.users.push(user)
        },
        deleteUser:(state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.user.id);
            state.users.splice(index, 1)
        }


    }
});

const userReducer = userSlice.reducer;
export  const {addUser} = userSlice.actions;
export  const {deleteUser} = userSlice.actions;
export default userReducer;
