import './Times.css'            

const Time = (props) =>{

    return (
        <section className='times' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}> {props.nome} </h3>
        </section>
    )

}

export default Time