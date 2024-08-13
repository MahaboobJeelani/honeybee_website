import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    state: ''
};

const contactSlice = createSlice({
    name: 'contact',
    initialState: initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPhone: (state, action) => {
            state.phone = action.payload
        },
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setState: (state, action) => {
            state.state = action.payload
        },
        resetForm: (state) => {
            state.name = '';
            state.email = '';
            state.phone = '';
            state.address = '';
            state.state = '';
        }
    }
})

export const { setName, setEmail, setPhone, setAddress, setState, resetForm } = contactSlice.actions
export default contactSlice.reducer;