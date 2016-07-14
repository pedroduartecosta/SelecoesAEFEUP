import {Component} from '@angular/core';
import {MatchesPage} from '../matches/matches';
import {CalendarPage} from '../calendar/calendar';
import {TeamsPage} from '../teams/teams';
import {OptionsPage} from '../options/options';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {

  private matchesTabRoot: any;
  private calendarTabRoot: any;
  private teamsTabRoot: any;
  private optionsTabRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.matchesTabRoot = MatchesPage;
    this.calendarTabRoot = CalendarPage;
    this.teamsTabRoot = TeamsPage;
    this.optionsTabRoot = OptionsPage;
  }
}
