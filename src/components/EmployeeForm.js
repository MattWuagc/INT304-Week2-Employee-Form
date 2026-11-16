import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
constructor(props) {
    super(props);
    this.state = { name: '', email: '', title: '', department: '' };
}
handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
};
handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ name: '', email: '', title: '', department: '' });
};

render() {
    return (
        <div>
        <form className="employee-form" onSubmit={this.handleSubmit}>
            <h2>Add Employee</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="title">Job Title:</label>
        <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
        <label htmlFor="department">Department:</label>
        <input type="text" id="department" name="department" value={this.state.department} onChange={this.handleChange} />
        <button type="submit">Add</button>
        </form>
        </div>
    );
}

}

export default EmployeeForm;