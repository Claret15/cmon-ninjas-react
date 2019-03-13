import React from 'react';

export const Table = props => {
  return (
    <table className={props.small ? "table table-hover table-sm" : "table table-hover"}>
      {props.children}
    </table>
  )
}

export const Header = props => {
  return (
    <thead className={props.dark ? "thead-dark" : ""}>
      <tr>
        {props.children}
      </tr>
    </thead>
  )
}

export const Body = props => {
  return (
      <tbody>
          {props.children}
      </tbody>
  )
}


