import { Program } from '../interfaces/program.interface';

const PMTCT_PROGRAM: Program = {
  uuid: '781d897a-1359-11df-a1f1-0026b9348838',
  name: 'PREVENTION OF MOTHER-TO-CHILD TRANSMISSION OF HIV',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};
const STANDARD_CARE_MODEL: Program = {
  uuid: 'f0faccb7-657e-413c-abad-54f13409d106',
  name: 'STANDARD CARE MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};
const AHD_MODEL: Program = {
  uuid: '4545685e-65f6-48c4-a6b4-860cea88c4d4',
  name: 'ADVANCED HIV DISEASE MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};
const VIREMIA_MODEL: Program = {
  uuid: '30521f4d-0708-4644-9e88-a108a830a5fd',
  name: 'VIREMIA MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};

// new programs

const HEI_MODEL: Program = {
  uuid: 'a9a2a679-4028-456f-9a63-f4748b83dae7',
  name: 'HEI_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};
const FAST_TRACK_FACILITY_CARE_MODEL: Program = {
  uuid: '9d7422b1-af7b-4602-813e-953cfaf47e21',
  name: 'FAST_TRACK_FACILITY_CARE_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};

const PEER_LED_FACILITY_ART_GROUP_MODEL: Program = {
  uuid: 'a74f5be3-19bf-44a9-b9d8-14ff5587df37',
  name: 'PEER_LED_FACILITY_ART_GROUP_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: true
};
const HCW_FACILITY_ART_DISTRIBUTION_MODEL: Program = {
  uuid: 'e352cb61-5889-4ba3-8405-d975e4c5e89e',
  name: 'HCW_FACILITY_ART_DISTRIBUTION_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};
const MULTI_MONTH_DISPENSING_MODEL: Program = {
  uuid: 'e352cb61-5889-4ba3-8405-d975e4c5e89e',
  name: 'MULTI_MONTH_DISPENSING_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};
const PEER_LED_COMMUNITY_ART_GROUP_MODEL: Program = {
  uuid: '6d5d10b3-ea80-4ee5-a58e-5f8a6f88ae93',
  name: 'PEER_LED_COMMUNITY_ART_GROUP_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};
const HCW_COMMUNITY_ART_GROUP_MODEL: Program = {
  uuid: '7299b930-4866-437e-a879-aefbb5bf2e0b',
  name: 'HCW_COMMUNITY_ART_GROUP_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};
const INDIVIDUAL_DDD_MODEL: Program = {
  uuid: '6af0e0eb-7172-4d94-92fd-aa987bb43250',
  name: 'INDIVIDUAL_PATIENT_ART_DISTRIBUTION_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};
const COMMUNTIY_PHARMACY_MODEL: Program = {
  uuid: 'e33b0107-c248-42b4-8c94-4525fcc0c86e',
  name: 'COMMUNITY_PHARMACY_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: true
};
const FAMILY_COMMUNITY_ART_GROUP_MODEL: Program = {
  uuid: 'f16403bb-c5df-46ba-afce-14f8aea2fabd',
  name: 'FAMILY_COMMUNITY_ART_GROUP_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: false
};
const STANDARD_PMTCT_MODEL: Program = {
  uuid: 'e950ade1-041d-4dda-b0cd-bb81dad8694e',
  name: 'STANDARD_PMTCT_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: true
};
const PMTCT_DSD_MODEL: Program = {
  uuid: 'e950ade1-041d-4dda-b0cd-bb81dad8694e',
  name: 'PMTCT_DSD_MODEL',
  dept: 'HIV',
  compatibleWithOtherDeptPrograms: true
};

// end new programs

export const Programs = {
  PMTCT_PROGRAM,
  STANDARD_CARE_MODEL,
  AHD_MODEL,
  VIREMIA_MODEL,
  HEI_MODEL,
  FAST_TRACK_FACILITY_CARE_MODEL,
  PEER_LED_FACILITY_ART_GROUP_MODEL,
  HCW_FACILITY_ART_DISTRIBUTION_MODEL,
  MULTI_MONTH_DISPENSING_MODEL,
  PEER_LED_COMMUNITY_ART_GROUP_MODEL,
  HCW_COMMUNITY_ART_GROUP_MODEL,
  INDIVIDUAL_DDD_MODEL,
  COMMUNTIY_PHARMACY_MODEL,
  FAMILY_COMMUNITY_ART_GROUP_MODEL,
  STANDARD_PMTCT_MODEL,
  PMTCT_DSD_MODEL
};
