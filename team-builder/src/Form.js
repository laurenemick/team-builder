import React from 'react'

export default function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
      } = props

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='header'>
                <h2>Add a Team Member:</h2>
            </div>
            <div className='form-inputs'>
                <label htmlFor='nameInput'>Name:&nbsp;
                    <input 
                        id='nameInputs'
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                        maxLength='100'
                    />
                </label>
                < br />
                < br />
                <label htmlFor='emailInputs'>Email:&nbsp;
                    <input 
                        id='emailInputs'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>
                <br />
                <br />
                <label>Role:&nbsp;
                    <select
                        name='role'
                        value={values.role}
                        onChange={onInputChange}
                    >
                        <option value=''>-- Select a Role --</option>
                        <option value='Project Manager'>Project Manager</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='UI/UX Designer'>UI/UX Designer</option>
                    </select>
                </label>
            </div>
            <br />
            <br />
            <div className='form-group submit'>
                <button>Submit</button>
                <br />
                <br />
            </div>
        </form>
    )
}