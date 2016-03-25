(function(){

  var jsonData = '{"Name":"Naveen"}';

  function mirror(literal){
    if(literal === '{'){
      return '}';
    } else if(literal === '"'){
      return '"'; 
    } else if(literal === '[')
      return ']'; 
  }

  function formatText (data){
      var fdata='';

      for(v=0,n=data.length;v<n;v++){  
        }

      if(data.indexOf('{') === 0)
        {
          fdata += '{' + '</br>';
          fdata += '&nbsp&nbsp&nbsp';
        }

      fdata += data.substring(1,data.length);



      $('#formattedJson').html(fdata);
    }

  $(document).ready(function(){
      $('#formatJson').click(function(){
            formatText(jsonData);
        });

   });

/*
"name":"naveen"
name:"naveen"
name:5
name:"5"
name:[]
name:{}
*/

})();  