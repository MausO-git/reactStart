const Membre = ({nom, age, children}) => {
    // const nom = props.nom
    // const age = props.age

    // const {nom, age} = props

    return ( 
        <>
            <h2>Membre: {nom} - Age: {age} </h2>
            { children ? <p>{children}</p> : null } 
        </>
     );
}
 
export default Membre;