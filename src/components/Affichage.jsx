const Affichage = (props) => {
    return ( 
        <h2 style={{backgroundColor: props.age <= 50 ? '#193EB3' : 'goldenrod', color: 'white'}} className="round">
            Membre : {props.nom.toUpperCase()} - age : {props.age} ans
        </h2>
     );
}
 
export default Affichage;