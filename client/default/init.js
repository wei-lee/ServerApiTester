function testWebCall(){
  $fh.act({act:'testWeb', req:{}}, function(res){
    alert(JSON.stringify(res));
  })
}

function testCreateCache(){
  $fh.act({act:'testCreateCache', req:{}}, function(res){
    alert(JSON.stringify(res));
  })
}

function testLoadCache(){
  $fh.act({act:'testLoadCache', req:{}}, function(res){
    alert(JSON.stringify(res));
  })
}

function testRemoveCache(){
  $fh.act({act:'testRemoveCache', req:{}}, function(res){
    alert(JSON.stringify(res));
  })
}

function testFeed(){
  $fh.act({act:'testFeed', req:{}}, function(res){
    alert(JSON.stringify(res));
  })
}