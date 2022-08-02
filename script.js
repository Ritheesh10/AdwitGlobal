let dataList = [
  {
    OrderDate: "22nd Feb 2022",
    OrderType: "print",
    AdwitAdsID: 22222222,
    UniqueJobNumber: "Koch and Sons",
    AdvertiserName: "Janice Monahan",
    AdRepName: "Janice Monahan",
    Status: "In Production",
    Priority: 1,
    Actions: "Design",
  },
  {
    OrderDate: "22nd Feb 2022",
    OrderType: "print",
    AdwitAdsID: 22222222,
    UniqueJobNumber: "Koch and Sons",
    AdvertiserName: "Janice Monahan",
    AdRepName: "Janice Monahan",
    Status: "In Production",
    Priority: 1,
    Actions: "Design",
  },
  {
    OrderDate: "22nd Feb 2022",
    OrderType: "print",
    AdwitAdsID: 22222222,
    UniqueJobNumber: "Koch and Sons",
    AdvertiserName: "Janice Monahan",
    AdRepName: "Janice Monahan",
    Status: "In Production",
    Priority: 1,
    Actions: "Design",
  },
  {
    OrderDate: "22nd Feb 2022",
    OrderType: "print",
    AdwitAdsID: 22222222,
    UniqueJobNumber: "Koch and Sons",
    AdvertiserName: "Janice Monahan",
    AdRepName: "Janice Monahan",
    Status: "In Production",
    Priority: 1,
    Actions: "Design",
  },
  {
    OrderDate: "22nd Feb 2022",
    OrderType: "print",
    AdwitAdsID: 22222222,
    UniqueJobNumber: "Koch and Sons",
    AdvertiserName: "Janice Monahan",
    AdRepName: "Janice Monahan",
    Status: "In Production",
    Priority: 1,
    Actions: "Design",
  },
  {
    OrderDate: "22nd Feb 2022",
    OrderType: "print",
    AdwitAdsID: 22222222,
    UniqueJobNumber: "Koch and Sons",
    AdvertiserName: "Janice Monahan",
    AdRepName: "Janice Monahan",
    Status: "In Production",
    Priority: 1,
    Actions: "Design",
  },
];

document.querySelector("tbody").innerHTML += dataList.map((val, i) => {
  let {
    OrderDate,
    OrderType,
    AdwitAdsID,
    UniqueJobNumber,
    AdvertiserName,
    AdRepName,
    Status,
    Priority,
    Actions,
  } = val;
  return `<tr class="d-flex align-items-center gap-lg-5 text-center border border-dark p-1 ">
    <td>${OrderDate}</td>
    <td>${OrderType}</td>
    <td>${AdwitAdsID}</td>
    <td>${UniqueJobNumber}</td>
    <td>${AdvertiserName}</td>
    <td>${AdRepName}</td>
    <td>${Status}</td>
    <td>${Priority}</td>
    <td><button type="button" id="design class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">${Actions}</button></td>
  </tr>`;
});

document.getElementById('design').addEventListener('click', e => {
    e.preventDefault()
    
})