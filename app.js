var event_api = 'https://app.ticketmaster.com/discovery/v2/events?apikey=vRdwIoPNT4txmIpnpLaLxuW0yKR2OC9f&locale=*';

async function api(){
  var url = fetch(event_api);
  var promise = await (await url).json();
  console.log(promise._embedded);
  var parent = document.querySelector('.parent'); 
  for(let i of promise._embedded.events){
    try {
      console.log(i);
      var condainer2 = document.createElement('div');
      condainer2.classList.add('child');

      //whice event
      var event_promoter = document.createElement('h6');
      event_promoter.innerText = i.promoter.name;
      condainer2.append(event_promoter);

      //img
      var event_img = document.createElement('img');
      event_img.setAttribute('src',i.images[0].url);
      condainer2.append(event_img);

      //name
      var event_name = document.createElement('h5'); 
      event_name.innerText = i.name;
      condainer2.append(event_name);

      //ticketlimit
      var event_ticket = document.createElement('p');
      event_ticket.innerText = "TicketLimits : " + i.accessibility.ticketLimit;
      condainer2.append(event_ticket);
      
      //Date
      var lable_date = document.createElement('label');
      var event_date = document.createElement('input');
      event_date.setAttribute('type','date');
      event_date.setAttribute('value',i.dates.start.localDate);
      event_date.setAttribute('min','2023-02-28');
      event_date.setAttribute('max','2023-12-31');
      lable_date.innerText = "Date of Event :  "
      lable_date.append(event_date);
      condainer2.append(lable_date);

      //Status
      var event_status = document.createElement('p');
      event_status.innerText = "Available : " + i.dates.status.code;
      condainer2.append(event_status);

      //Button
      var event_book = document.createElement('a');
      event_book.setAttribute('href',i.url);
      event_book.setAttribute('target','_blank');
      var booking_btn = document.createElement('button');
      booking_btn.innerText = "Book Now";
      event_book.append(booking_btn);
      condainer2.append(event_book);
      
      parent.append(condainer2);
    } catch (error) {
      //
    }
  }
  
}
api();