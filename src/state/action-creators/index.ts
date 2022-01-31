import axios from "axios";
import { Dispatch } from "react";
import { Action } from "../actions";
import { ActionType } from "../actions-types";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {
            console.log(term);
            const { data } = await axios.get(`https://registry.npmjs.org/-/v1/search`, {
                params: {
                    text: term
                }
            })

            const name = data.objects.map((result: any) => result.package.name)

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCES,
                payload: name
            })

        } catch (err: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}

