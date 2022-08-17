/**
 * 
 * @param {string} url 
 */
function queryParser(url){
    const REleft = /(&|\?|)[^&|?]*$/;
    const REright = /^[^&|?]*(&|\?|)/;
    const result = [];
    url = url.slice(url.indexOf('/')+1)
    url = url.slice(url.indexOf('?')+1)
    params = url.split("=");

    for(let i=1;i<=params.length-1;i++){
       
        let leftparam = REleft.exec(params[i-1])[0];

        let rightparam = REright.exec(params[i])[0];

        if (leftparam.includes('&') ){
            leftparam = leftparam.slice(leftparam.indexOf("&")+1)
        }
        else if (leftparam.includes('?')){
            leftparam = leftparam.slice(leftparam.indexOf("?")+1)
        }



        if (rightparam.includes('&') ){
            rightparam = rightparam.slice(0,rightparam.indexOf("&"))
        }
        else if (rightparam.includes('?')){
            rightparam = rightparam.slice(0,rightparam.indexOf("?"))
        }
        result.push([leftparam,rightparam])

    };
    
    return Object.fromEntries(result);
}   















module.exports = {
    queryParser

}