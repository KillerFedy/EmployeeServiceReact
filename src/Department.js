import React from 'react';

const Department = ({ department }) => {
  return (
    <div>
      <h2>{department.departmentName}</h2>
      <ul>
        {department.employees.map(employee => (
          <li key={employee.id}>{employee.name} - {employee.position}</li>
        ))}
      </ul>
      {department.childDepartments.map(childDepartment => (
        <Department key={childDepartment.id} department={childDepartment} />
      ))}
    </div>
  );
};

export default Department;