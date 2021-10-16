import FullName from "./FullName";
import Address from "./Address";

function ProfilPhoto() {

    return (

        <div>
            <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
                <FullName />
                <img src="download.jpeg" alt="wallah jsuis beau" />
                <Address />
            </div>
        </div>
    );
}

export default ProfilPhoto;