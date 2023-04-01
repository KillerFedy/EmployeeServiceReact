import React, { useEffect, useState } from 'react';
import Department from './Department';

const DepartmentHierarchy = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/departments')
      .then(res => res.json())
      .then(data => setDepartments(data));
  }, []);

  return (
    <div>
      {departments.map(department => (
        <Department key={department.id} department={department} />
      ))}
    </div>
  );
};

export default DepartmentHierarchy;