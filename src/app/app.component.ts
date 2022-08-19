
import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [readonly]="readonly" [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class AppComponent {
public readonly: boolean = true;
public selectedDate: Date = new Date(2022, 2, 17);
private dataManager: DataManager = new DataManager({
   url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
   adaptor: new ODataV4Adaptor,
   crossDomain: true
});
public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
}




// import { Component, ViewChild } from '@angular/core';
// import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';
// import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

// @Component({
//   selector: 'app-root',
//   providers: [DayService, WeekService, WorkWeekService, MonthService],
//   // specifies the template string for the Schedule component
//   template: `<button #deleteButton ejs-button id="deleteButton" type="button" content="Delete" (click)="onButtonClick()"></button>
//   <ejs-schedule #scheduleObj width='100%' height='520px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" [views]="scheduleViews"></ejs-schedule>`
// })
// export class AppComponent {
// @ViewChild("scheduleObj")
// public scheduleObj!: ScheduleComponent;
// @ViewChild("deleteButton")
// public deleteButton!: ButtonComponent;
// public selectedDate: Date = new Date(2018, 1, 15);
// public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
// public eventSettings: EventSettingsModel = {
//     dataSource: [{
//         Id: 3,
//         Subject: 'Testing',
//         StartTime: new Date(2018, 1, 11, 9, 0),
//         EndTime: new Date(2018, 1, 11, 10, 0),
//         IsAllDay: false,
//         RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
//     }, {
//         Id: 4,
//         Subject: 'Vacation',
//         StartTime: new Date(2018, 1, 12, 11, 0),
//         EndTime: new Date(2018, 1, 12, 12, 0),
//         IsAllDay: false,
//         RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
//     }]
// }
// public onButtonClick(): void {
//     const scheduleData: { [key: string]: Object }[] = [{
//         Id: 4,
//         Subject: 'Vacation',
//         RecurrenceID: 4,
//         StartTime: new Date(2018, 1, 12, 11, 0),
//         EndTime: new Date(2018, 1, 12, 12, 0),
//         IsAllDay: false,
//         RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
//     }];
//     this.scheduleObj.deleteEvent(scheduleData,'DeleteSeries'); //elimina toda la serie
//     this.scheduleObj.deleteEvent(scheduleData,'DeleteOccurrence'); // elimina una
//     this.deleteButton.element.setAttribute('disabled','true');
// }
// }




// //no editar los eventos en horas de trabajo

// import { Component, ViewChild } from '@angular/core';
// import { ScheduleComponent,EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ActionEventArgs } from '@syncfusion/ej2-angular-schedule';
// import { scheduleData } from './datasource';

// @Component({
//   selector: 'app-root',
//   providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
//   // specifies the template string for the Schedule component
//   template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" (actionBegin)="onActionBegin($event)"></ejs-schedule>`
// })
// export class AppComponent {
// @ViewChild("scheduleObj")
// public scheduleObj!: ScheduleComponent;
// public selectedDate: Date = new Date(2018, 1, 15);
// public eventSettings: EventSettingsModel = { dataSource: scheduleData };
// public onActionBegin(args: ActionEventArgs): void {
//     if (args.requestType == 'eventChange') {
//         const weekEnds: number[] = [0, 6];
//         const data: { [key: string]: Object } = args.data as { [key: string]: Object };
//         const weekDay: boolean = weekEnds.indexOf((data['StartTime'] as Date).getDay()) >= 0;
//         const workHours: boolean = ((parseInt(this.scheduleObj.workHours.start.toString().slice(0, 2), 10) <= (data.StartTime as Date).getHours()) && (parseInt(scheduleObj.workHours.end.toString().slice(0, 2), 10)) >= (data.StartTime as Date).getHours());
//         if (weekDay || !workHours) {
//             args.cancel = true;
//         }
//     }
// }
// }



// //eliminar eventos

// import { Component, ViewChild } from '@angular/core';
// import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';
// import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

// @Component({
//   selector: 'app-root',
//   providers: [DayService, WeekService, WorkWeekService, MonthService],
//   // specifies the template string for the Schedule component
//   template: `<button #deleteButton ejs-button id="deleteButton" type="button" content="Delete" (click)="onButtonClick()"></button>
//   <ejs-schedule #scheduleObj width='100%' height='520px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" [views]="scheduleViews"></ejs-schedule>`
// })
// export class AppComponent {
// @ViewChild("scheduleObj")
// public scheduleObj!: ScheduleComponent;
// @ViewChild("deleteButton")
// public deleteButton!: ButtonComponent;
// public selectedDate: Date = new Date(2018, 1, 15);
// public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
// public eventSettings: EventSettingsModel = {
//     dataSource: [{
//         Id: 3,
//         Subject: 'Testing',
//         StartTime: new Date(2018, 1, 11, 9, 0),
//         EndTime: new Date(2018, 1, 11, 10, 0)
//     }, {
//         Id: 4,
//         Subject: 'Vacation',
//         StartTime: new Date(2018, 1, 12, 11, 0),
//         EndTime: new Date(2018, 1, 12, 12, 0)
//     }]
// }
// public onButtonClick(): void {
//     this.scheduleObj.deleteEvent(4);
//     this.deleteButton.element.setAttribute('disabled','true');
// }
// }

//Editar eventos
// import { Component, ViewChild } from '@angular/core';
// import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';
// import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

// @Component({
//   selector: 'app-root',
//   providers: [DayService, WeekService, WorkWeekService, MonthService],
//   // specifies the template string for the Schedule component
//   template: `<button #editButton ejs-button id="editButton" type="button" content="Edit" (click)="onButtonClick()"></button>
//   <ejs-schedule #scheduleObj width='100%' height='520px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" [views]="scheduleViews"></ejs-schedule>`
// })
// export class AppComponent {
// @ViewChild("scheduleObj")
// public scheduleObj!: ScheduleComponent;
// @ViewChild("editButton")
// public editButton!: ButtonComponent;
// public selectedDate: Date = new Date(2018, 1, 15);
// public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
// public eventSettings: EventSettingsModel = {
//     dataSource: [{
//         Id: 3,
//         Subject: 'Testing',
//         StartTime: new Date(2018, 1, 11, 9, 0),
//         EndTime: new Date(2018, 1, 11, 10, 0),
//         IsAllDay: false
//     }, {
//         Id: 4,
//         Subject: 'Vacation',
//         StartTime: new Date(2018, 1, 13, 9, 0),
//         EndTime: new Date(2018, 1, 13, 10, 0),
//         IsAllDay: false
//     }]
// }
// public onButtonClick(): void {
//     let data: Object = {
//         Id: 3,
//         Subject: 'Testing-edited',
//         StartTime: new Date(2018, 1, 11, 10, 0),
//         EndTime: new Date(2018, 1, 11, 11, 0),
//         IsAllDay: false
//     };
//     this.scheduleObj.saveEvent(data);
//     this.editButton.element.setAttribute('disabled','true');
// }
// }


// fields: {
//     subject: { name: 'Subject', validation: { required: true } },
//     location: {
//         name: 'Location', validation: {
//             required: true,
//             regex: ["^[a-zA-Z0-9- ]*$", 'Special character(s) not allowed in this field']
//         }
//     }
// }      necesidad de llenar los lugares, y con restricion de letras



// public onButtonClick(): void {
//     let data: Object = {
//         Id: 3,
//         Subject: 'Testing-edited',
//         StartTime: new Date(2018, 1, 11, 10, 0),
//         EndTime: new Date(2018, 1, 11, 11, 0),
//         IsAllDay: false
//     };
//     this.scheduleObj.saveEvent(data);

//  this.scheduleObj.addEvent(data); agregar evento
//this.scheduleObj.saveEvent(data); editar evento
//     this.editButton.element.setAttribute('disabled','true');
// }
// }



// import { Component } from '@angular/core';
// import { DragEventArgs, EventSettingsModel, ResizeEventArgs, View } from '@syncfusion/ej2-angular-schedule';
// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data'

// @Component({
//   selector: 'app-root',
//   /// [allowDragAndDrop]="false" [allowResizing]="false"]
//   template: '<ejs-schedule [eventSettings]="eventObject"></ejs-schedule>',
//   //templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'mi-calendario';
//   public setView: View = "WorkWeek"
//   public setDate: Date=new Date(2022, 8, 15);
//   public eventObject: EventSettingsModel = {

//     dataSource: [{
//       Id: 1,
//       Subject: "Corte Muller",
//       StartTime: new Date(2022,8,15,4,0),
//       EndTime: new Date(2022,8,17,6,0),
//       // IsBlock: true  bloquear fechas
//       //IsReadOnly: false   bloquear ediciones o eliminaciones
//       //RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=10"  para hacer repeticiones de reserva
//     }]

//     // fields: {
//     //   subject: { name: 'EventTitle', default: "Reserva", title: "Ingrese el titulo"},
//     //   startTime: { name: 'EventStart'},
//     //   endTime: { name: 'EventEnd'}
//     // }

//   }

//   onDragStart(args:DragEventArgs): void{
//     //args.scroll.enable=false;
//     args.interval=10   //mover las citas de a 10 min
//   }

//   onResizeStart(args:ResizeEventArgs): void {
//     //args.scroll.enable=false;
//     args.interval=10
//   }

//     // private eventData: DataManager = new DataManager({
//   //   url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
//   //   adaptor: new WebApiAdaptor,
//   //   crossDomain: true
//   // })

//   // public eventObject: EventSettingsModel = {

//   //   dataSource: this.eventData

//   // }
// }
