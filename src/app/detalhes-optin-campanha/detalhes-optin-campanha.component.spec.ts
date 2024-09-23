import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesOptinCampanhaComponent } from './detalhes-optin-campanha.component';

describe('DetalhesOptinCampanhaComponent', () => {
  let component: DetalhesOptinCampanhaComponent;
  let fixture: ComponentFixture<DetalhesOptinCampanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesOptinCampanhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesOptinCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
