import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataSurveyService } from '../../services/data-survey.service';
import { QuestionsDb } from '../../models/QuestionsDb';
import { SurveyService } from '../../services/survey.service';
import { Subscription } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-enviroment-build',
  templateUrl: './enviroment-build.component.html',
  styleUrls: ['./enviroment-build.component.css'],
})
export class EnviromentBuildComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public questionsHave: QuestionsDb[] = [];
  public questionsProblem: QuestionsDb[] = [];
  public enviromentBuild: any = [];
  private readonly notifier: NotifierService;
  constructor(
    public dataSurveyService: DataSurveyService,
    private surveyService: SurveyService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.dataSurveyService.surveyFinal.enviromentBuild = this.enviromentBuild;
    this.subscription.add(
    this.surveyService.getAllQuestions().subscribe({
      next: (data) => {
        this.dataSurveyService.allQuestions = data;
        this.buildObject();
      },
      error: (error) => {
        this.notifier.show({
          type: 'error',
          message: error.error.message,
        });
      },
    })
    );
  }
  setAnswer(question_id: number, answer: string) {
    this.enviromentBuild.find(
      (question) => question.question_id === question_id
    ).answer = answer;
  }
  buildObject() {
    this.dataSurveyService.allQuestions.forEach((question) => {
      if (question.name === 'question_have') {
        this.questionsHave.push(question);
        this.enviromentBuild.push({
          question_id: question.id,
          answer: null,
        });
      } else if (question.name === 'question_problem') {
        this.questionsProblem.push(question);
        this.enviromentBuild.push({
          question_id: question.id,
          answer: null,
        });
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
