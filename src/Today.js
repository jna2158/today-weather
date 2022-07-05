import React from "react";

// class Today extends React.Component {
//   render() {
//     return (
//       <>
//         <div>{this.getDate()}</div>
//       </>
//     );
//   }
//   getDate() {
//     let today = new Date();
//     console.log(today);
//   }
// }
function Today() {
  const getDate = () => {
    var today = new Date();

    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    var dateString = year + "-" + month + "-" + day;
    return dateString;
  };
  return <div>{getDate()}</div>;
}

export default Today;
