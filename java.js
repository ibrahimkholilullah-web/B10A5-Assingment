function getElementAllIdSelect(id){
    const textValue = document.getElementById(id).innerText;
    const textValues = parseFloat(textValue);
    return textValues
}
function getInputById (id){
    const inputValue = document.getElementById(id).value;
    const inputValues = parseFloat(inputValue);
    return inputValues;
}
// blog btn
document.getElementById('blog-tab').addEventListener('click', function(){
    window.location.href = 'blog.html'

})

//donae for noakhile section
document.getElementById('donate-btn-1').addEventListener('click', function(){
   const noakhaliDonateMoney = getElementAllIdSelect('donate-money-1')
   const myAcoundMoney = getElementAllIdSelect('my-id-money');
   const noakhiteInputMoney = getInputById('noakhali-donate-inpur')
   if(isNaN(noakhiteInputMoney) || noakhiteInputMoney < 0){
     alert('Please Enter Balide Number')
      return
   }
   if(noakhiteInputMoney > myAcoundMoney){
    return alert('You dont have enough money')
   }
    
    const newDonateMoney = noakhiteInputMoney + noakhaliDonateMoney;
    document.getElementById('donate-money-1').innerText = newDonateMoney;
    const newMyAcountMoney = myAcoundMoney - noakhiteInputMoney;
    document.getElementById('my-id-money').innerText = newMyAcountMoney;
    const div = document.createElement('div')
    div.className = 'border p-4 rounded-lg my-4 '
    div.innerHTML = `
    <p class= "md:text-xl text-sm">${noakhiteInputMoney} Taka is Donated for Donated for Flood ot Noakhali, Bangladesh</p>
    <p class="my-3 md:text-xl text-sm bg-slate-100 rounded-xl p-2">Date : ${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
    `
    const historySection = document.getElementById('history-section');
    historySection.appendChild(div)
    document.getElementById('my_modal_1').showModal();
});

//donate for feni section
document.getElementById('donate-btn-2').addEventListener('click', function(){
   const feniDonateMoney = getElementAllIdSelect('feni-money')
   const myAcoundMoney = getElementAllIdSelect('my-id-money');
   const feniInputMoney = getInputById('feni-donate-input')
   
   if(isNaN(feniInputMoney) || feniInputMoney < 0){
    alert('Please Enter Balide Number')
     return
   }
   if(feniInputMoney > myAcoundMoney){
    return alert('You dont have enough money')
   }
   const newDonateMoney = feniDonateMoney + feniInputMoney;
   document.getElementById('feni-money').innerText = newDonateMoney;
   const newMyAcountMoney = myAcoundMoney - feniInputMoney;
   document.getElementById('my-id-money').innerText = newMyAcountMoney;
   const div = document.createElement('div')
   div.className = 'border p-4 rounded-lg my-4 '
   div.innerHTML = `
    <p class="md:text-xl text-sm">${feniInputMoney} Donate for Flood Relief in Feni,Bangladesh</p>
    <p class="my-3 md:text-xl text-sm bg-slate-100 rounded-xl p-2">Date : ${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
   `
   const historySection = document.getElementById('history-section');
   historySection.appendChild(div);
   document.getElementById('my_modal_2').showModal();
});

// quote Movement section
document.getElementById('donate-btn-3').addEventListener('click', function(){
   const quoteDonateMoney = getElementAllIdSelect('quote-money')
   const myAcoundMoney = getElementAllIdSelect('my-id-money');
   const quoteInputMoney = getInputById('quote-donate-input')
   
   if(isNaN(quoteInputMoney) || quoteInputMoney < 0){
    alert('Please Enter Balide Number')
     return
   }
   if(quoteInputMoney > myAcoundMoney){
    return alert('You dont have enough money')
   }
   const newDonateMoney = quoteDonateMoney + quoteInputMoney;
   document.getElementById('quote-money').innerText = newDonateMoney;
   const newMyAcountMoney = myAcoundMoney - quoteInputMoney;
   document.getElementById('my-id-money').innerText = newMyAcountMoney;

   const div = document.createElement('div')
   div.className = 'border p-4 rounded-lg my-4 '
   div.innerHTML = `
   <p class= "md:text-xl text-sm">${quoteInputMoney}  Aid for Injured in the Quota Movement</p>
   <p class="my-3 bg-slate-100 md:text-xl text-sm rounded-xl p-2">Date : ${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
   `
   const historySection = document.getElementById('history');
   historySection.insertBefore(div, historySection.firstChild);
   document.getElementById('my_modal_3').showModal();

});

// history btn Selection
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('donation').classList.add('hidden')
    const historyTab = document.getElementById('history-btn');
    historyTab.classList.add(
        "mr-4",
        "bg-[#B4F461]"
    )
    const donationTba = document.getElementById('donation-btn')
    donationTba.classList.remove(
        "ml-4",
        "bg-[#B4F461]"
    )
});

//donates section
document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('donation').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
    const historyTab = document.getElementById('history-btn');
    historyTab.classList.remove(
        "mr-4",
        "bg-[#B4F461]"
    )
    const donationTba = document.getElementById('donation-btn')
    donationTba.classList.add(
        "mr-4",
        "bg-[#B4F461]"
    )
})