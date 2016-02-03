---
layout: post
title:  "List of all VistA calls made by COMS"
date:   2016-01-21
weight: 200
categories: RPC_Calls
---

Link to [ViViaN](http://code.osehra.org/vivian/) (Visualizing VistA and Namespace)
Link to [ViViaN Searchable RPC List](http://code.osehra.org/vivian/files/All-RPC.html).

## List of VistA Calls:

### SD Namespace in the Scheduling Package
* [OSEHRA Dependencies &amp; Code View](http://code.osehra.org/OSEHRA_dox/Package_Scheduling.html) 
* [VA Dependencies &amp; Code View](http://code.osehra.org/dox/Package_Scheduling.html)
* [DSS Dependencies &amp; Code View](http://code.osehra.org/dox_alpha/vxvista/Package_Scheduling.html)
* [RPC](http://code.osehra.org/vivian/files/Scheduling-RPC.html)
Description:
The DHCP Scheduling package allows a user to Schedule appointments for
the following types of appointments:
Scheduled
C&P
Collateral
It also allows entry of an unscheduled appointment at any time during a day
on which the clinic being scheduled into meets. From these appointments,
various output reports are produced such as, but not limited to, file room
list, appointment list, routing slips, letters for cancellations, no-shows,
and pre-appointment. There is an additional capability where additional
clinic stop credits can be directly entered and associated with a particular
patient and date. AMIS reporting is handled via a set of extract routines
that summarize the data found by reading through the appointments and
additional clinic stops and the 10/10 and unscheduled visits (outpatient
credit given to Admitting/Screening) and storing the information by patient
and visit date in the OCP File. The AMIS 223 report and the OPC
file to be sent to the Austin DPC are generated using this file.


### ORQQVI - http://code.osehra.org/dox/Routine_ORQQVI.html - http://code.osehra.org/dox/Package_Order_Entry_Results_Reporting.html Order Entry Results Reporting Package
### ORQQVI2 - http://code.osehra.org/dox/Routine_ORQQVI2.html
### ORWDPS2 - http://code.osehra.org/dox/Routine_ORWDPS2.html 
### ORWDX - http://code.osehra.org/dox/Routine_ORWDX.html
### ORWDXA - http://code.osehra.org/dox/Routine_ORWDXA.html
### ORWDXM - http://code.osehra.org/dox/Routine_ORWDXM.html
### ORWPS - http://code.osehra.org/dox/Routine_ORWPS.html
### ORWPT - http://code.osehra.org/dox/Routine_ORWPT.html
### ORWU - http://code.osehra.org/dox/Routine_ORWU.html
### ORWUL - http://code.osehra.org/dox/Routine_ORWUL.html
### SD - http://code.osehra.org/dox/Routine_SD.html - http://code.osehra.org/dox/Package_Scheduling.html
### VPR - VPRD - http://code.osehra.org/dox/Routine_VPRD.html - http://code.osehra.org/vivian/files/8994-2917.html
### VPR - VPRDJ - http://code.osehra.org/dox/Routine_VPRDJ.html - http://code.osehra.org/vivian/files/8994-3243.html
### XUS - http://code.osehra.org/dox/Routine_XUS.html - Kernel - http://code.osehra.org/dox/Package_Kernel.html
### XWB










-----------------------

### Appointments
* make	
Package: [Scheduling](http://code.osehra.org/dox/Package_Scheduling.html), 
[Vivian](http://code.osehra.org/vivian/files/8994-646.html)
  * 'SD APPOINTMENT MAKE', 
  * apptParams, <- Array of ["patient", "clinic", date (ISO8601 format), "appointment_type", 'length', 'scheduling_request_type', 'other', 'CI', labDate, xrayDate, ekgDate, 'consult', 'level']
* getSchedulingRequestTypes	
  * 'SD GET SCHDULING REQUEST TYPES', 

### Clinics
* getAvailability			
  * 'SD GET CLINIC AVAILABILITY', 
* getDetails				
  * 'SD GET CLINIC DETAILS', 
* getAll				
  * 'SD GET CLINICS BY NAME', 

### Medication
* getOrderInfo			
  * 'ORWDPS2 OISLCT',	
  * [ medicationIEN, 'U', patientIEN, 'N', 'N' ], 
* getOutPatient			
  * 'ORWUL FV4DG', 'O RX'
  * 'ORWUL FVSUB', 
  * [firstParam, '1', lastIndex], function(error, result){
* findByName				
  * 'ORWUL FVIDX',	
  * [ '32', medicationName ]
* getMedicineIENFromORWULIndex	
  * 'ORWUL FVSUB'	
  * [ '32', index, index ]
* getInPatient			
  * 'ORWUL FV4DG', 
  * 'IVM RX'
* getInPatient(2)		
  * 'ORWUL FVSUB', 
  * [firstParam, '1', lastIndex]

### Order
* getDialogIENByName			
  * 'XWB GET VARIABLE VALUE', 
  * vista.RpcParameter.reference('$O(^ORD(101.41,"B","'+dialogName+'",0))'),
* getDialogByIEN				
  * 'ORWDXM MENU', 
  * dialogIEN,
* getDialogByName				
  * 'ORWDXM MENU', 
  * vista.RpcParameter.reference('$O(^ORD(101.41,"B","'+dialogName+'",0))'),
* saveOrder				
  * 'ORWDX SAVE', 
  * orderhelper.convertOrderToVistaOrderParams(orderOptions);
* lockOrdersForPatient			
  * 'ORWDX LOCK', 
  * patientdfn
* lockOrder				
  * 'ORWDX LOCK ORDER', 
  * orderien
* unLockOrdersForPatient			
  * 'ORWDX UNLOCK', 
  * patientdfn
* unLockOrder				
  * 'ORWDX UNLOCK ORDER', 
  * orderien
* checkComplexOrderMessage		
  * 'ORWDXA OFCPLX', 
  * orderien
* checkReleaseOrder			
  * 'ORWDXA OFCPLX', 
  * {'1': orderien+'^^1'}
* sendOrders				
  * 'ORWDX SEND', 
  * [patientDfn,providerDuz,locationIen,vista.RpcParameter.encrypted(esig),orders]

### Patient
* addVital - [Vivian](http://code.osehra.org/vivian/files/8994-495.html) [ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2.html)
  * 'ORQQVI2 VITALS VAL & STORE', 
  * vitalParams, <- Array of []
* findPatientByLastFive	[Vivian](http://code.osehra.org/vivian/files/8994-277.html) [ORWPT](http://code.osehra.org/dox/Routine_ORWPT.html)
  * 'ORWPT LAST5', 
  * lastFive,
* findPatientByName	[Vivian](http://code.osehra.org/vivian/files/8994-191.html) [ORWPT](http://code.osehra.org/dox/Routine_ORWPT.html)
  * 'ORWPT LIST ALL', 
  * [patientName, '1'],
* findPatientBySSN	[Vivian](http://code.osehra.org/vivian/files/8994-646.html) [ORWPT](http://code.osehra.org/dox/Routine_ORWPT.html)
  * 'ORWPT FULLSSN', ssn, 
* getAllPatients	[Vivian](http://code.osehra.org/vivian/files/8994-191.html) [ORWPT](http://code.osehra.org/dox/Routine_ORWPT.html)
  * 'ORWPT LIST ALL', ['', '1'], 
* getMedicationDetailForPatient	[Vivian]() [ORWPS](http://code.osehra.org/dox/Routine_ORWPS.html)
  * 'ORWPS DETAIL', [dfn, ien], (dfn - the patient id in VistA, ien - The internal entry drug number entered by Pharmacy personnel into the DRUG file (#50) to identify Unit Dose and IV medications., retrievable by the getMedicationsForPatient operation
* getMedicationsForPatient	[Vivian]() [ORWPS](http://code.osehra.org/dox/Routine_ORWPS.html)
  * 'ORWPS COVER', dfn,

* getVirtualPatientRecord		
  * 'VPR GET PATIENT DATA JSON', { '"patientId"' : patientid }
* getVitals				
  * 'ORQQVI VITALS', patientId,
* selectPatient				
  * 'ORWPT SELECT', patientId, 

### User
* getInfo					
  * 'XUS GET USER INFO', 
* findUserByName				
  * 'ORWU NEWPERS',[vista.adjustStringForVistaSearch(query), '1'], 

## Utilities
* currentDate				
  * 'ORWU DT', 
  * 'NOW'
