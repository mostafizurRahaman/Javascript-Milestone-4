/*
1. Write function about multilayer discount 
2. if you can buy tickets first 100 tickets price 100 tk 
3. if you can buy tickets more then 100 first 100 price ticket per price 100 and rest ticket price 90
4. if you can buy tickets more then 200 
   * fisrt 100 tickets per price 100
   * second 100 tickets per price 90
   * rest tickets per price 70
*/

function multiLayerDiscount(tickets){
   const first100TicketsPerPrice = 100; 
   const second100TicketsPerPrice = 90; 
   const restTicketPerPrice = 70; 
   if(tickets<=100){
          const totalPrice = first100TicketsPerPrice* tickets; 
          return totalPrice; 
   }else if(tickets<=200){
      const first100TicketsPrice = first100TicketsPerPrice * 100; 
      const restTickets = tickets -100; 
      const restTicketsPrice = restTickets * second100TicketsPerPrice; 
      const  totalPrice  = first100TicketsPrice + restTicketsPrice; 
      return totalPrice; 
   }else{
      const first100TicketsPrice = first100TicketsPerPrice * 100; 
      const second100TicketsPrice = second100TicketsPerPrice * 100; 
      const restTickets = tickets -200;
      const restTicketsPrice = restTickets * restTicketPerPrice 
      const totalPrice = first100TicketsPrice +second100TicketsPrice+ restTicketsPrice; 
      return totalPrice; 
   }
   
}

console.log(multiLayerDiscount(210)); 
