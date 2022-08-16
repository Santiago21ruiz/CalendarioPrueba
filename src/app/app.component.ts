
import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate'
  [eventSettings]='eventSettings'></ejs-schedule>`
})
export class AppComponent {
  public data: object [] = [{
id: 2,
eventName: 'Meeting',
startTime: new Date(2018, 1, 15, 10, 0),
endTime: new Date(2018, 1, 15, 12, 30),
isAllDay: false
  }];
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = {
dataSource: this.data,
fields: {
  id: 'id',
  subject: { name: 'eventName' },
  isAllDay: { name: 'isAllDay' },
  startTime: { name: 'startTime' },
  endTime: { name: 'endTime' },
}
  };
}


























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
