import './Modal.css';
import { CloseButton, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

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
                    <Link to="/">
                        <CloseButton aria-label="Hide" />
                    </Link>
                </Modal.Header>
                <Modal.Body >
                    <img src={`./react-router-patterns/${currentDog.src}.jpg`} alt={currentDog.name} />
                    <ul>
                        {currentDog.facts && currentDog.facts.map((fact, i) => (
                            <li key={i}><i className='modal-dialog-li'>🦴</i> {fact}</li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <p className="fs-6 footer-text"><img src="./react-router-patterns/doge.png" alt='logo'/> <span>Dog Finder</span></p>
                </Modal.Footer>
            </Modal>
        )
    }

    return null;
}

export default CustomModal;
