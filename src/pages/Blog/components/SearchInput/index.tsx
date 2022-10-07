import { SearchInputContainer } from "./styles";

export function SearchInput() {
    return (
        <SearchInputContainer>
            <header>
                <h3>Publicações</h3>
                <span>5 publicações</span>
            </header>

            <input type="tex't" placeholder="Buscar Conteúdo" />
        </SearchInputContainer>
    )
}