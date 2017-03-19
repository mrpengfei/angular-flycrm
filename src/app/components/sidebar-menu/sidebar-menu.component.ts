import { Component, OnInit,Input } from '@angular/core';

const MENUS = [{
  MenuId:1,
  MenuName:'首页',
  ParentId:0,
  Link:'/'
},
{
  MenuId:2,
  MenuName:'资源管理',
  ParentId:0,
  Link:'#'
},
{
  MenuId:3,
  MenuName:'我的资源',
  ParentId:2,
  Link:'/resource/myresource'
}
]

@Component({
  selector: '[app-sidebar-menu]',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  @Input() parentId: number;
  @Input() menus;
  isSubMenu:boolean=true;

  constructor() { 

  }

  ngOnInit() {
    if(this.parentId <= 0){
      this.menus = MENUS;
      this.isSubMenu = false;
    }
  }

  hasSubMenu(parentId){
    return this.menus.some((value,index,array) => {
      return value.ParentId == parentId;
    });
  }

  getSubMenus(parentId){
    var result = this.menus.filter((value,index,array) => {
      return value.ParentId == parentId;
    });
    return result;
  }

}
