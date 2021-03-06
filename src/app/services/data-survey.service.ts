import { Injectable } from '@angular/core';
import { Survey } from '../models/Survey';
import {QuestionsDb} from '../models/QuestionsDb';

@Injectable({
  providedIn: 'root',
})

export class DataSurveyService {

  public surveyFinal: Survey = {
    evaluator: null,
    participant: null,
    companion: null,
    medicalCenter: null,
    date: null,
    minimentalTestForm: null,
    demographicInit: null,
    demographicCronicConditions: null,
    habits: null,
    physicalActivity: null,
    livingSpace: null,
    enviromentBuild: null,
    pshysicalPerformance: null,
  };

  public allQuestions: QuestionsDb[] = [];

  constructor() {}


}
