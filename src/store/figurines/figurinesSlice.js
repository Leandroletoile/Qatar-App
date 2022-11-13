import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSaving: false,
    teams: [],
    nameByTeam: "argentina",
    myTeam: []

};


export const figurinesSlice = createSlice({
    name: "teams",
    initialState,
    reducers: {
        setAllTeams: (state, { payload }) => {
            state.isSaving = true,
                state.teams = payload,
                state.isSaving = false
        },
        setTeamByName: (state, { payload }) => {
            state.isSaving = true,
                state.nameByTeam = payload,
                state.isSaving = false
        },
        addPlayer: (state, { payload }) => {
            if (state.myTeam.includes(payload)) state.myTeam = state.myTeam
            else if (state.myTeam.length < 11) state.myTeam.push(payload)
        },
        deletePlayer: (state, { payload }) => {
            state.myTeam = state.myTeam.filter((item) => item !== payload)
        }

    }
})


export const {
    setAllTeams,
    setTeamByName,
    addPlayer,
    deletePlayer
} = figurinesSlice.actions;

export default figurinesSlice.reducer;
