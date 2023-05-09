import React, { useState } from 'react'
import List from './List'

interface Props {
    name: string
    description?: string
    status?: string
    dueDate?: string
}

class Tasks extends List {
    
    static TasksConstructor({ name }: Props) {
        return (
            <li className="list-group-item d-flex align-items-center">
                <div className="form-check">
                    <input className="form-check-input me-1" type="checkbox" value="" id={name} />
                </div>
                <input type="text" className="form-control" placeholder={name} aria-label="Username" aria-describedby="basic-addon1" />
            </li>
        )
    }

}

export default Tasks