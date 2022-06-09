import { Component, OnInit } from '@angular/core';
import { DataSurveyService } from '../../services/data-survey.service';

@Component({
  selector: 'app-enviroment-build',
  templateUrl: './enviroment-build.component.html',
  styleUrls: ['./enviroment-build.component.css']
})
export class EnviromentBuildComponent implements OnInit {
 public enviromentBuild: any = {
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
    q10: null,
    q11: null,
    q12: null,
    q13: null,
    q14: null,
    q15: null,
    q16: null,
    q17: null,
 }
  constructor(
    public dataSurveyService: DataSurveyService
  ) { }

  ngOnInit(): void {
    this.dataSurveyService.surveyFinal.enviromentBuild = this.enviromentBuild;
  }
}
