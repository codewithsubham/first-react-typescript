import { ActionType } from "../actions-types";
import { Action } from "../actions";

interface repositoriesState {
    loading: boolean,
    error: string | null,
    data: string[]
}

const intialState = { loading: false, error: null, data: [] }

const repositoriesReducer = (state: repositoriesState = intialState, action: Action): repositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITORIES_SUCCES:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state;
    }

}

export default repositoriesReducer;