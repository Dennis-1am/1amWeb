import React from 'react'

interface Props {
    name: string
    list: any[]
}

const ListStyle = {
    width: '30rem'
}

class List extends React.Component {
    static ListConstructor({ name, list }: Props) {
        return (
            <>
                <h2>{name}</h2>
                <ul style={ListStyle} className="list-group" id={name}>
                    {list.map((item, index) => {
                        return (
                            item
                        )
                    })}
                </ul>
            </>
        )
    }
    
}


export default List