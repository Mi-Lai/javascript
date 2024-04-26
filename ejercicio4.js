/*Online status
*Display online status for a list of users.
*Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` 
should return `'mockIng99, J0eyPunch and 1 more online'`.
*mockIng99, J0eyPunch and 1 more online
* == 1 mock is online
* ==2 are online
* == 3 mock and more are online 
*/



const users= ['mockIng99', 'J0eyPunch', 'glassedFer','Mi-Lai','Javier','Nicolas'];

function DisplayStatus(usuarios){
   const count=users.length; 
    let res;
if (count==1){
    res= `${usuarios[0]} is online`;
}
else if (count==2){
res= `${usuarios[0], usuarios[1]} are online`;
}
else if (count>=3){
    res= `${usuarios[0]}, ${usuarios[1]} and ${count-2} more are online`;
}
return res;
}

console.log(DisplayStatus(users));

