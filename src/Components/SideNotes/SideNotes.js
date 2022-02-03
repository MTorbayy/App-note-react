import React, {useEffect, useState} from 'react'
import './SideNotes.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

export default function SideNotes() {

    const {notes} = useSelector(state => state.notesReducer)

    console.log(notes)
    
  return (
  <div>

  </div>
  )
}
