$(function(){
    let params = getQueryVariable('k')
    if(params){
           $('#keyword').val(decodeURI(params))
           let url = createUrl(params)
           $.ajax({
               url,
               success:(res)=>{
                   let html = ''
                   for(let i =0;i<res.result.songs.length;i++){
                       let song = res.result.songs[i]
                         html+=createListItem(song)
                   }
                  $('#list').html(html);
               }
           })
    }else{
        $('#list').html('<div class="col-sm-12">没有结果或者关键词为空</div>');
    }

    $('#search').click(function(){
        let keyword = $('#keyword').val()
        if(keyword){
            window.location.href = 'search.html?k='+keyword
        }else{
            window.location.href='/'
        }

    
    })

    function createListItem(obj){
        let html = `
            <div class='row'>
            <div class='col-sm-12'>
            <div class="media">
                    <div class="media-left">
                        <a href="#">
                          <img class="media-object" src="${obj.artists[0].img1v1Url}" style='width:40px;'alt="...">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">${obj.name}</h4>
                        ${obj.artists[0].name}
                    </div>
                </div>
            </div></div>
        `
        return html
    }

    function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }



    function createUrl(keyword){
        return 'http://musicapi.leanapp.cn/search?keywords='+keyword
    }
})