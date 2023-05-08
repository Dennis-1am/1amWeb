import React from 'react'
interface Props {
    content: "ice-cream"
}

function Lam({content}: Props) {
    return (
        <div>
            <form>
                <div className="form-group">
                    {content == "ice-cream" && <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>}
                </div>
            </form>
        </div>
    )
}

export default Lam