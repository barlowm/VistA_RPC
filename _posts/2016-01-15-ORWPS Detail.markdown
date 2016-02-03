---
layout: post
title:  "ORWPS Detail"
date:   2016-01-15
weight: 200
categories: ORWPS
---


D:\WebRoot\_CODE_\COMS\NodeJS\coms-api\application\api\v1\patient.js
getMedicationDetailForPatient()
Calls the vista.callRpc()


`  vista.callRpc(
    vistaconfig.logger, 
    configuration, 
    'ORWPS DETAIL', 
    [dfn, ien], 
    function(error, result){  
      if(result instanceof Error){
        callback(result, null);
      }else{
        callback(error, result);
      }
    }
  );
`

This RPC call is detailed in...
[ORWPS - Detail](https://github.com/OSEHRA/VistA-M/blob/master/Packages/Order%20Entry%20Results%20Reporting/Routines/ORWPS.m#LC176)

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
