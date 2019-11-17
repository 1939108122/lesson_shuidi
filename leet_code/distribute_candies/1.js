var a =[1,2,1,3,2];

let count =0;
for(var i= 0;i<a.length-1;i++)
{
    for (var j= i+1;j<a.length; j++)
    {
        if(a[i]==a[j])
        {
           for(var x=i+1; x < a.length; x++)
           {
               a[x-1]=a[x];
               count ++;
               
           }
        }
    }
}

 let k = (a.length)-2;

    a[k]='\0';

for (var i=0;i<a.length;i++ )
{ 
console.log(a[i]);
}
