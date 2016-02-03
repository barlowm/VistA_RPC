---
layout: post
title:  "RPC Calls Made"
date:   2016-01-15
weight: 200
categories: RPC_Calls
---

## List of Service Calls:

### GETs
* '/appointment/scheduling_request_types'

* '/clinic/availability/:id'
* '/clinic/details/:id'
* '/clinics'

* '/current/date'

* '/medication/name/:name'
* '/medications/inpatient'
* '/medications/outpatient'

* '/order/checkRelease/:ien'

* '/order/complexOrderMessage/:ien'

* '/order/dialog/ien/:ien'
* '/order/dialog/name/:name'
* '/order/dialogien/:name'

* '/order/info/:patient/:medicationid'

* '/patient/:patient'
* '/patient/details/:patient'
* '/patient/lastfive/:lastfive'
* '/patient/medication/detail/:id/:medicationien'
* '/patient/medications/:id'
* '/patient/name/:name'
* '/patient/ssn/:ssn'
* '/patient/vitals/:patient'
* '/patients'

* '/user/info'
* '/users/:name'
* '/vital/codes'


### POSTs
'/appointment/make'
'/authenticate'

'/order/lock'
'/order/lockforpatient'
'/order/new'
'/order/send'
'/order/unlock'
'/order/unlockforpatient'

'/patient/vital/add'





## Note: vista.callRpc can be passed 4 or 5 arguments.

* Arg1: Logger
* Arg2: Configuration Params
* Arg3: RPC Cmd
* Arg4: (Optional) RPC Cmd Parameters
* Arg5: Callback handler Function

    router.get('/appointment/scheduling_request_types', function(req, res){
  RPC_CMD = 'SD GET SCHDULING REQUEST TYPES'
  vista.callRpc(logger, config, RPC_CMD, ErrorHandler);


  RPC_CMD = 'SD APPOINTMENT MAKE'
  Params = array
  vista.callRpc(logger, config, RPC_CMD, Params, ErrorHandler);



## Types and number of RPC requests made

* appointments - 2 (appointments.js)
  * make - 'SD APPOINTMENT MAKE', apptParams (array)
  * getSchedulingRequestTypes - 'SD GET SCHDULING REQUEST TYPES', none
* clinics - 3 (clinics.js)
  * getAll - 'SD GET CLINICS BY NAME', ['','',''],
  * getAvailability - 'SD GET CLINIC AVAILABILITY', clinicid
  * getDetails - 'SD GET CLINIC DETAILS', clinicid
* medication - 7 (medication.js)
  * getMedicineIENFromORWULIndex - 'ORWUL FVSUB', [ '32', index, index ]
  * findByName - 'ORWUL FVIDX', [ '32', medicationName ]
  * getOrderInfo - 'ORWDPS2 OISLCT', [ medicationIEN, 'U', patientIEN, 'N', 'N' ]
  * getOutPatient - 'ORWUL FV4DG', 'O RX'
    * 'ORWUL FVSUB', [firstParam, '1', lastIndex]
  * getInPatient - 'ORWUL FV4DG', 'IVM RX'
    * 'ORWUL FVSUB', [firstParam, '1', lastIndex]
* order - 12 (order.js)
  * getDialogIENByName - 'XWB GET VARIABLE VALUE', vista.RpcParameter.reference('$O(^ORD(101.41,"B","'+dialogName+'",0))')
  * getDialogByIEN - 'ORWDXM MENU', dialogIEN
  * getDialogByName - 'ORWDXM MENU', vista.RpcParameter.reference('$O(^ORD(101.41,"B","'+dialogName+'",0))')
  * saveOrder - 'ORWDX SAVE', orderhelper.convertOrderToVistaOrderParams(orderOptions)
  * lockOrdersForPatient - 'ORWDX LOCK', patientdfn
  * lockOrder - 'ORWDX LOCK ORDER', orderien
  * unLockOrdersForPatient - 'ORWDX UNLOCK', patientdfn
  * unLockOrder - 'ORWDX UNLOCK ORDER', orderien
  * checkComplexOrderMessage - 'ORWDXA OFCPLX', orderien
  * checkComplexOrderMessage - 'ORWDXA OFCPLX', orderien
  * checkReleaseOrder - 'ORWDXA OFCPLX', {'1': orderien+'^^1'}
  * sendOrders - 'ORWDX SEND', [patientDfn, providerDuz, locationIen, vista.RpcParameter.encrypted(esig), orders ]
* patient - 10 (patient.js)
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
* user - 2
  * 
  * 
* utilities - 1
  * currentDate - 'ORWU DT', 'NOW'

