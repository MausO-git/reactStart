import Affichage from "./Affichage";
import Button from "./Button";

const Membre = ({nom, age, children, handleChange, handleAgeChange, hideName, plus, vieillir}) => {
    // const nom = props.nom
    // const age = props.age

    // const {nom, age} = props

    return ( 
        <>
            <Affichage 
                nom = {nom}
                age = {age}
            />
            <input type="text" value={nom} onChange={handleChange} />
            <input type="number" value={age} onChange={handleAgeChange} />
            <button onClick={hideName}>X</button>
            <Button
                plus = {plus}
                vieillir = {vieillir}
            >
            </Button>
            { children ? <p>{children}</p> : null } 
        </>
     );
}
 
export default Membre;