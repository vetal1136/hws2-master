import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                const newState = [...state]
                return newState.sort((a, b) => {
                    if (a.name > b.name) return 1
                    else return -1
                })
            } else if (action.payload === 'down') {
                const newState = [...state]
                return newState.sort((a, b) => {
                    if (a.name < b.name) return 1
                    else return -1
                })
            } else return [...state]
            // need to fix
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
            // need to fix
        }
        default:
            return [...state]
    }
}