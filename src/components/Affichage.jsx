const Affichage = (props) => {
    return ( 
        <h2 style={{backgroundColor: props.age <= 35 ? 'purple' : 'goldenrod', color: 'white'}}>
            Membre : {props.nom.toUpperCase()} - age : {props.age} ans
        </h2>
     );
}
 
export default Affichage;