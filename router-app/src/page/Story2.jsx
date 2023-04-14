import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function Story2() {
const params = useParams(); // params 변수나

return (
    <div>
        <h1>{params.name} Story2</h1>
        <Link to="/"> Home | </Link>
        <Link to="/about"> About | </Link>
    </div>
);}
