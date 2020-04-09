import React, { Component } from 'react'

const Comment = (props) => {
    console.log("histories:",histories)
    console.log("history:", history)
    const {id} = props.match.params
    const history = props.histories.find((v) => v.id === parseInt(id))


    return (
        <>
            comment: {history.comment}
        </>
    )
}

export default Comment