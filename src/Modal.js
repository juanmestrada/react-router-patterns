import './Modal.css';
import { CloseButton, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import logo from "./assets/doge.png";

const CustomModal = ({ dogs}) => {
    const { name } = useParams();

    if (name) {
        const currentDog = dogs.find(
          dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        
        return (
            <Modal dialogClassName="modal-dialog modal-dialog-scrollable" show={true} backdrop={false} >
                <Modal.Header>
                    <Modal.Title>Name: {currentDog.name}, Age: {currentDog.age}</Modal.Title>
                    <Link to="/react-router-patterns/">
                        <CloseButton aria-label="Hide" />
                    </Link>
                </Modal.Header>
                <Modal.Body >
                    <img src={currentDog.src} alt={currentDog.name} />
                    <ul>
                        {currentDog.facts && currentDog.facts.map((fact, i) => (
                            <li key={i}><i className='modal-dialog-li'>🦴</i> {fact}</li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <p className="fs-6 footer-text"><img src={logo} alt='logo'/> <span>Dog Finder</span></p>
                </Modal.Footer>
            </Modal>
        )
    }

    return null;
}

export default CustomModal;
