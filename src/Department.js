import React from "react";

const Department = ({ department }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleToggle}>
        {department.id} {department.departmentName}
        {department.childDepartments.length > 0 && (
          <span>{isOpen ? " -" : " +"}</span>
        )}
      </div>

      {isOpen &&
        department.childDepartments.map((childDepartment) => (
          <Department key={childDepartment.id} department={childDepartment} />
        ))}

      {isOpen &&
        department.employees.map((employee) => (
          <div key={employee.id}>
            {employee.name} - {employee.position} (id - {employee.id})
          </div>
        ))}
    </div>
  );
};

export default Department;