var html = '';
  $(document).ready(function () {
      var apiURL = 'https://api.github.com/users/symfony/repos?per_page=1000';
      $.ajax({
        url:apiURL,
        type:"get",
        dataType:"json",
        success:function(data){
            $.each(data,function(key,value){
                html += '<li>'+value.name+'</li>';
            })
            $('#repoList').html(html);

        } 
      })
  });
  