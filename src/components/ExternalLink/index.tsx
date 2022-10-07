import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLinkContainer } from "./styles";

export function ExternalLink() {
    return (
        <ExternalLinkContainer href="https://github.com/GaSoler">
            GITHUB
            <FontAwesomeIcon icon={faUpRightFromSquare} />
        </ExternalLinkContainer>
    )
}