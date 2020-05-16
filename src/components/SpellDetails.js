import React from 'react'

const SpellDetails = props => {

    return (
        <div>
            {props.spell.level === 0 ? <p>{props.spell.school.name} cantrip</p> : <p>{props.spell.level} level {props.spell.school.name}</p>}
            <span><h5>Casting Time:</h5> {props.spell.casting_time}</span>
            <span><h5>Range:</h5> {props.spell.range}</span>
            <span><h5>Components:</h5> {props.spell.components.map((comp, index) => <p key={index}>{comp}</p>)}</span>
            <span><h5>Duration:</h5><p>{props.spell.duration}</p></span>
            <span>{props.spell.desc.map((p, index) => <p key={index}>{p}</p>)}</span>
            {props.spell.higher_level ? 
                <span><h5>At Higher Levels:</h5>{props.spell.higher_level.map((p, index) => <p key={index}>{p}</p>)}</span> 
                : <div></div> }
        </div>
    )
}

export default SpellDetails