//Written by Isara Nakavisute , TEL: 096-797-3130

function compute_value_of_alien_numberals(input_string: string): number {
  let result:number=0; //This is the placeholder for computing the value
  for (let i = 0 ; i < input_string.length ; i++) //loop through all characters of the input array
   {
    if (input_string[i]=='A')
     {
      if (input_string[i+1]=='B')
       {
        result += 4; //AB = 5-1 = 4
        i++; //increment the counter so that the consequent letter of the detected pair is not re-computed.
       }
      else if (input_string[i+1]=='Z')
       {
        result += 9; //AZ = 10-1 = 9
        i++ //increment the counter so that the consequent letter of the detected pair is not re-computed.
       }
      else
       result += 1; //A=1
     }
    else if (input_string[i]=='B')
     result += 5; //B=5
    else if (input_string[i]=='Z')
     {
      if (input_string[i+1]=='L')
       {
        result += 40; //ZL = 50-10 = 40
        i++; //increment the counter so that the consequent letter of the detected pair is not re-computed.
       }
      else if (input_string[i+1]=='C')
       {
        result += 90; //ZC = 100-10 = 90
        i++ //increment the counter so that the consequent letter of the detected pair is not re-computed.
       }
      else
       result += 10; //Z=1-
     }
    else if (input_string[i]=='L')
     result += 50; //L=50
    else if (input_string[i]=='C')
     {
       if (input_string[i+1]=='D')
       {
        result += 400; //CD = 500-100 = 400
        i++; //increment the counter so that the consequent letter of the detected pair is not re-computed.
       }
      else if (input_string[i+1]=='R')
       {
        result += 900; //CR = 1000-100 = 900
        i++ //increment the counter so that the consequent letter of the detected pair is not re-computed.
       }
      else
       result += 100; //C=100
     }
    else if (input_string[i]=='D')
     result += 500; //D=500
    else if (input_string[i]=='R')
     result += 1000; //R=1000
   }
  return result;
  }
 console.log(compute_value_of_alien_numberals("AAA"));
 console.log(compute_value_of_alien_numberals("LBAAA"));
 console.log(compute_value_of_alien_numberals("RCRZCAB"));


  