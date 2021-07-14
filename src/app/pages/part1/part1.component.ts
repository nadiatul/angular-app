import { Component, OnInit } from '@angular/core';
import { Part1Service } from 'src/app/globals/services/part1.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {
  public initialManagers: any;
  public managers: any;

  public dropdownsAgeFilters = [
    { value: 'all', description: 'All'},
    { value: '20', description: '20 and Below'},
    { value: '21', description: '21 to 39'},
    { value: '40', description: '40 and above'},
  ];

  constructor(private part1Service: Part1Service) { }

  ngOnInit(): void {
    this.getPart1Api();
  }

  getPart1Api() {
    this.part1Service.getDistrictManagerService().subscribe((res: any) =>{
      this.managers = res;
      this.initialManagers = res;
    }, err => console.error(err));
  }

  filterByAge(value: any) {
    if(value){
      switch(value){
        case 'all':
          this.managers = this.initialManagers;
        break;
        case '20':
          this.managers = this.initialManagers.filter((e: any )=> e.age <= 20)
        break;
        case '21':
          this.managers = this.initialManagers.filter((e: any )=> e.age >= 21 && e.age <=39)
        break;
        case '40':
          this.managers = this.initialManagers.filter((e: any )=> e.age >= 40)
        break;

      }
    }
  }

  onChange(value: any) {
    this.filterByAge(value.target.value);
  }

}
