function testWebCall(){
  $fh.act({act:'testWeb', req:{}}, function(res){
    alert(JSON.stringify(res));
  })
}