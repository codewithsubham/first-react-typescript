import { ActionType } from "../actions-types"

interface SEARCH_REPOSITORIES {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SEARCH_REPOSITORIES_SUCCES {
    type: ActionType.SEARCH_REPOSITORIES_SUCCES;
    payload: string[]
}

interface SEARCH_REPOSITORIES_ERROR {
    type: ActionType.SEARCH_REPOSITORIES_ERROR,
    payload: string
}




export type Action = | SEARCH_REPOSITORIES | SEARCH_REPOSITORIES_ERROR | SEARCH_REPOSITORIES_SUCCES;

