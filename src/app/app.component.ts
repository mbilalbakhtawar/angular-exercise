import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularExercise';

  customers = [
    {
      company: "Greenstone Financial",
      name: "John snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#91C540",
      profile_image: "2.png"
    },
    {
      company: "Think Company",
      name: "John Snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#0C16EE",
      profile_image: "3.png"
    },
    {
      company: "Penn Medicine",
      name: "John Snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#396195",
      profile_image: "3.png"
    },
    {
      company: "SXSW, LLC",
      name: "John Snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#F9C31B",
      profile_image: "2.png"
    },
    {
      company: "Masterwork Reality, LLC",
      name: "John Snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#27D5D2",
      profile_image: "1.png"
    },
    {
      company: "Infinite Flame",
      name: "John Snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#CF3164",
      profile_image: "1.png"
    },
    {
      company: "Elastic, LLC",
      name: "John Snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#FFA533",
      profile_image: "2.png"
    },
    {
      company: "Dentitect",
      name: "John Snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#3481A7",
      profile_image: "3.png"
    },
    {
      company: "Penn Medicine",
      name: "John Snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#8DE337",
      profile_image: "3.png"
    },
    {
      company: "SXSW, LLC",
      name: "John Snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#A146D1",
      profile_image: "2.png"
    },
    {
      company: "Masterwork Reality, LLC",
      name: "John Snow",
      description: "123 Main St, Philadelphia, PA, 19147 jsnow@company.com",
      cardBorder: "#E21C6D",
      profile_image: "1.png"
    },
  ]
}
