import { Component, OnInit, OnDestroy } from '@angular/core';

import * as _ from 'lodash';
import * as Moment from 'moment';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { CommonVitalsSource } from './sources/common-vitals.source';
import { EncounterResourceService } from './../../../openmrs-api/encounter-resource.service';
import { HivTriageSource } from './sources/hiv-triage.source';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../../models/patient.model';
import { Vital } from '../../../models/vital.model';
import { TodaysVitalsService } from './todays-vitals.service';
import { OncologyTriageSource } from './sources/oncology-triage.source';
import { ZScoreSource } from './sources/z-score.source';
import { HivSummaryService } from '../../hiv/hiv-summary/hiv-summary.service';

@Component({
  selector: 'todays-vitals',
  templateUrl: './todays-vitals.component.html',
  styleUrls: ['./todays-vitals.component.css']
})
export class TodaysVitalsComponent implements OnInit, OnDestroy {
  public patient: Patient = new Patient({});
  public todaysVitals: Array<Vital | any> = [];
  public errors: any[] = [];
  public currentPatientSub: Subscription;
  public loadingTodaysVitals = false;
  public dataLoaded = false;
  public subscription: Subscription[] = [];
  public patientUUID: any;
  public error: any;
  public hivSummary: any;
  public isHEIActive: any;
  public showAll = false;
  public artStartDate: any;
  private vitalSources: any[] = [];

  constructor(
    private patientService: PatientService,
    private vitalService: TodaysVitalsService,

    private encounterResourceService: EncounterResourceService,
    private hivSummaryService: HivSummaryService
  ) {}

  public ngOnInit(): void {
    this.vitalSources = [
      CommonVitalsSource,
      HivTriageSource,
      OncologyTriageSource,
      ZScoreSource
    ];

    this.subscribeToPatientChangeEvent();
    console.log('UuID: ', this.patientUUID);
    console.log('PatInet: ', this.currentPatientSub);
  }

  public ngOnDestroy(): void {
    if (this.currentPatientSub) {
      this.currentPatientSub.unsubscribe();
    }
  }
  public getArtStartDate(patientUUID) {
    // const birthdate = this.patient.person.birthdate;
    // if (Moment().diff(Moment(birthdate), 'months') <= 18) {
    //   this.isHEIActive = true;
    // } else {
    //   this.isHEIActive = true;
    // }
    const summary = this.hivSummaryService
      .getHivSummary(patientUUID, 0, 5, true, this.isHEIActive)
      .subscribe(
        (result) => {
          console.log('ResultingData: ', result);
          // this.hivSummary = data && data.length > 0 ? data[0] : null;
          // console.log("Data: ",  data);
          this.artStartDate = this.hivSummary.arv_first_regimen_start_date;

          console.log('ARTStRtDate: ', this.artStartDate);

          // this.isBusy = false;
        },
        (err) => {
          this.error =
            'An error occured while loading Hiv Summary. Please try again.';
          // this.isBusy = false;
        }
      );
    this.subscription.push(summary);
  }
  public toggleMore() {
    this.showAll = !this.showAll;
  }

  public getTodaysVitals(patient: Patient) {
    this.resetVariables();
    const todaysEncounters = this.getTodaysEncounters(this.patient.encounters);
    this.getTodaysEncounterDetails(todaysEncounters)
      .then((encounterDetails) => {
        this.vitalService
          .getTodaysVitals(patient, encounterDetails, this.vitalSources)
          .then((data: any) => {
            if (data) {
              this.loadingTodaysVitals = false;
              this.todaysVitals = _.filter(data, 'show');
              this.dataLoaded = true;
            }
          })
          .catch((error) => {
            this.loadingTodaysVitals = false;
            this.dataLoaded = true;
            this.errors.push({
              id: 'Todays Vitals',
              message: "Error fetching today's vitals"
            });
          });
      })
      .catch((err) => {
        console.error("Error fetching today's vitals", err);
      });
  }

  public getTodaysEncounters(encounters) {
    const today = Moment().format('YYYY-MM-DD');
    const todaysEncounters = [];
    _.each(encounters, (encounter: any) => {
      const encounterDate = Moment(encounter.encounterDatetime).format(
        'YYYY-MM-DD'
      );
      if (encounterDate === today) {
        todaysEncounters.push(encounter);
      }
    });

    return todaysEncounters;
  }

  public getTodaysEncounterDetails(todaysEncounters) {
    return new Promise((resolve, reject) => {
      const encounterWithDetails = [];
      let encounterCount = 0;
      let resultCount = 0;
      const checkCount = () => {
        if (resultCount === encounterCount) {
          resolve(encounterWithDetails);
        }
      };
      _.each(todaysEncounters, (todaysEncounter: any) => {
        const encounterUuid = todaysEncounter.uuid;
        encounterCount++;
        this.encounterResourceService
          .getEncounterByUuid(encounterUuid)
          .pipe(take(1))
          .subscribe((encounterDetail) => {
            encounterWithDetails.push(encounterDetail);
            resultCount++;
            checkCount();
          });
      });
    });
  }

  public subscribeToPatientChangeEvent() {
    this.currentPatientSub = this.patientService.currentlyLoadedPatient.subscribe(
      (patient) => {
        if (patient) {
          this.patient = patient;
          this.patientUUID = this.patient.openmrsModel.uuid; // _openmrsModel.uuid;
          this.getArtStartDate(this.patientUUID);
          this.getTodaysVitals(patient);
        }
      }
    );
  }

  public resetVariables() {
    this.todaysVitals = undefined;
    this.dataLoaded = false;
    this.loadingTodaysVitals = false;
  }
}
