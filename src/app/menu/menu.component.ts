import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initializeMenu();
  }

  private initializeMenu(): void {
    //select menu links
    const links = document.querySelectorAll('.side-nav-link');

    links.forEach(link => {
      link.addEventListener('click', (event: Event) => {
        event.preventDefault();

        // block other menus
        const subMenus = document.querySelectorAll('.collapse');
        subMenus.forEach(menu => {
          if (menu !== (link as HTMLElement).nextElementSibling) {
            menu.classList.remove('show');
          }
        });


        const currentMenu = (link as HTMLElement).nextElementSibling as HTMLElement;
        if (currentMenu.classList.contains('show')) {
          currentMenu.classList.remove('show');
        } else {
          currentMenu.classList.add('show');
        }
      });
    });
  }
}

