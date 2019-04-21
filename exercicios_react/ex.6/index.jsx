import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
<Family lastName='Vanelli'>
    <Member name='Diego' />
    <Member name='Beto' />
    <Member name='Luiz' />
</Family>
, document.getElementById('app'))
