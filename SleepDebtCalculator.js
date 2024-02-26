// Step 1: Function to get sleep hours for a specific day
const getSleepHours = (day) => {
  switch (day.toLowerCase()) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
    case "wednesday":
      return 9;
    case "thursday":
      return 8;
    case "friday":
      return 5;
    case "saturday":
      return 10;
    case "sunday":
      return 11;
    default:
      return 0;
  }
};

// Step 4: Function to get total actual sleep hours
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

// Step 6: Function to get ideal sleep hours per week
const getIdealSleepHours = (idealHours) => idealHours * 7;

// Step 8: Function to calculate sleep debt
const calculateSleepDebt = (idealHours) => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(idealHours);

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got more sleep than needed. You slept " +
        (actualSleepHours - idealSleepHours) +
        " hours extra."
    );
  } else {
    console.log(
      "You should get some rest. You slept " +
        (idealSleepHours - actualSleepHours) +
        " hours less than needed."
    );
  }
};

calculateSleepDebt(8); 
