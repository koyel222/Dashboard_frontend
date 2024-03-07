// import Orders from "./order";

const Order=[
    {
        productName:'Foldable Mini Drone',
        productNumber:'85631',
        paymentStatus:'Due',
        shipping:'Pending'
    },
    {
        productName:'LARVENDER KF102 Drone',
        productNumber:'36378',
        paymentStatus:'Refunded',
        shipping:'Declined'
    },
    {
        productName:'Ruko F11 pro Drone',
        productNumber:'49347',
        paymentStatus:'Due',
        shipping:'Pending'
    },
    {
        productName:'Drone with camera drone',
        productNumber:'85631',
        paymentStatus:'Paid',
        shipping:'Delivered'
    },
    {
        productName:'GPS 4K drone',
        productNumber:'22821',
        paymentStatus:'Paid',
        shipping:'Delivered'
    }
]


const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector("#menu-btn");
const closeBtn=document.querySelector("#close-btn");
const themeToggler=document.querySelector(".theme-toggler")

console.log(themeToggler)

//show sidebar
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block';
})

//close sidebar
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})

//change theme

themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

Order.forEach(order => {
    const tr = document.createElement('tr');
    const tableContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td></td>
        <td>${order.paymentStatus}</td>
        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
        <td class="primary">Details</td>
    `
    tr.innerHTML = tableContent;
    document.querySelector('tbody').appendChild(tr);
})