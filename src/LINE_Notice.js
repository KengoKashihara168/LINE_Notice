function main(){
    console.log("Hello World!");
    var text = "Test";
    var token = "7vmMoX6tnTEoDxExqS4wYAInveeHRYp1Hia4WPoSrfZ";
    var options = {
        "method" : "post",
        "headers" : {
            "Authorization" : "Bearer "+ token
        },
        "payload" : {
            "message" : text
          }
    };

    var url = "https://notify-api.line.me/api/notify";
    UrlFetchApp.fetch(url, options);
}