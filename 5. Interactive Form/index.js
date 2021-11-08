//////////////////////
/* Interactive Form */
//////////////////////

const createInfo = () => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const password = document.getElementById("password").value;
  const condition = document.querySelector(
    "input[name=condition]:checked"
  ).value;
  const warehouse = document.getElementById("warehouse").value;
  const couriers = document.querySelectorAll("input[name=courier]:checked");
  const date = document.getElementById("tanggal").value;

  let courierList = "";
  couriers.forEach((courier) => {
    courierList += `${courier.value} `;
  });

  document.getElementById("result").innerHTML = `Name: ${name} <br>
  Price: ${price} <br> Password : ${password} <br> Condition: ${condition} <br> Warehouse: ${warehouse} <br> Courier : ${courierList} <br> Date: ${date}`;
};

// getElementById : text, email, number, password (id)
// querySelector : radio (name)
// querySelectorAll : checkbox (name)
