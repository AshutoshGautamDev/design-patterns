const singleton = (() => {
  let instance;

  const init = () => {
    // let's take a example of employee
    console.log("INIT Runs");
    const panNumber = "WSE343W";
    const accountNumber = "3122121545";

    return {
      name: "Ashutosh",
      salary: 10000,
      getBaseSalary: () => {
        return 5000;
      },
      //for testing
      employeeId: Math.random(),
    };
  };

  return {
    getInstance: () => {
      if (!instance) instance = init();
      return instance;
    },
  };
})();

const employeeOne = singleton.getInstance();
const employeeTwo = singleton.getInstance();

if (employeeOne.employeeId === employeeTwo.employeeId)
  console.log("Successfully Implemented");

// Output :
// INIT Runs
// Successfully Implemented
