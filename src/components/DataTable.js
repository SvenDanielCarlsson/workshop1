import React, { useState } from 'react';


const DataTable = () => {

    // states
    const allStudents = [
        {id: 1, firstName: 'Daniel', lastName: 'Carlsson', age: 36, birthDate: '19850505', country: 'Sweden' , city: 'Växjö'},
        {id: 2, firstName: 'Kim', lastName: 'Larsson', age: 34, birthDate: '19870707', country: 'Sweden' , city: 'Haparanda'},
        {id: 3, firstName: 'Morgan', lastName: 'Ohlsson', age: 34, birthDate: '20000505', country: 'Sweden' , city: 'Lima'},        
        {id: 4, firstName: 'Paul', lastName: 'Gilbert', age: 50, birthDate: '19661106', country: 'USA' , city: 'Lima'}
    ];
    const [studentList, setStudentList] = useState(allStudents);
    //const [student, setStudent] = useState({id: 0, firstName: '', lastName: '', age: 0, birthDate: '', country: '' , city: ''});


    // nested components
    const TableHeader = () => {
        return(
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Action Prototype</th>
            </tr>
        </thead>
        );
    };

    const TableRow = (props) => {

        return(
            <tbody>
                {
                    props.theStudents.map(showStudent=>{    //similar to foreach ex. item in list
                        
                        // add 'key' attribute in <tr> tag if studentlist is to be updated, key={student.id}
                        const showRow =(<tr>
                            <td>{showStudent.id}</td>
                            <td>{showStudent.firstName}</td>
                            <td>{showStudent.lastName}</td>
                            <td>{showStudent.age}</td>
                            <td><TableAction studentDetails={showStudent}/></td>
                        </tr>);

                    return showRow; //looping through each student in studentList thanks to map() calling a function once for every element in the array
                    })
                }
            </tbody>
        );
    };

    const TableAction = (props) => {

        return (<input type="button" className="btn-primary" value="Details"/>);
    };


    // Return for DataTable
    return (
        <div className="container">
            <h2>List of Students</h2>
            <table className="table">
                <TableHeader />
                <TableRow theStudents={studentList} />
            </table>            
        </div>
    );
};

export default DataTable;