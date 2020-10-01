import React from 'react';


class List extends React.Component {

    render() {

        return (
            <div className='container-sm List'>
                <h1>List</h1>
                <ul className="list-group">
                    {this.props.items.map((elems) => {
                        return <li className='list-group-item d-flex justify-content-between align-items-center' key={elems}>{elems.input}<span class="badge badge-primary badge-pill">{elems.price}€</span></li>
                    })}
                </ul>

            </div>
        )
    }
}
export default List;