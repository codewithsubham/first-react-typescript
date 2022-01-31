import { useState } from "react"
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { RootState } from "../state";


const RepositoriesList: React.FC = () => {

    let [term, setTerm] = useState<string>("");

    const { searchRepositories } = useActions();

    const { loading, error, data } = useSelector((state: RootState) => state.repositories);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
        setTerm("");
    }
    return <>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => onChange(e)} />
            <button>Search</button>
            {error && <h3>{error}</h3>}
            {loading && <h3>loading</h3>}
            {!error && !loading && data}
        </form>
    </>
}

export default RepositoriesList