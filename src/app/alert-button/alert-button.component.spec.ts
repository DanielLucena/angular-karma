import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertButtonComponent } from './alert-button.component';
import { By } from '@angular/platform-browser';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter valores iniciais', () => {
    expect(component.content).toBe('você foi avisado');
    expect(component.hideContent).toBeTrue();
    expect(component.severity).toBe(423);
  });

  it('deve alternar hideContent quando toggle for chamado', () => {
    expect(component.hideContent).toBeTrue();
    component.toggle();
    expect(component.hideContent).toBeFalse();
    component.toggle();
    expect(component.hideContent).toBeTrue();
  });

  it('deve exibir o conteúdo quando hideContent for falso', () => {
    component.hideContent = false;
    fixture.detectChanges();
    const contentElement = fixture.debugElement.query(By.css('.message'));
    expect(contentElement.nativeElement.hidden).toBeFalse();
  });

  it('deve ocultar o conteúdo quando hideContent for verdadeiro', () => {
    component.hideContent = true;
    fixture.detectChanges();
    const contentElement = fixture.debugElement.query(By.css('.message'));
    expect(contentElement.nativeElement.hidden).toBeTrue();
  });

  it('deve alternar a visibilidade do conteúdo quando o botão for clicado', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.hideContent).toBeFalse();

    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.hideContent).toBeTrue();
  });

  it('A mensagem deve conter `avisado`', () =>{
    expect(component.content).toContain('avisado');
  })

  it('A mensagem deve ser `avisado`', () =>{
    expect(component.content).toBe('avisado');
  })

  it('A mensagem deve ser `você foi avisado`', () =>{
    expect(component.content).toBe('você foi avisado');
  })

  it('severity tem que ser maior que 2', ()=>{
    expect(component.severity).toBeGreaterThan(2);
  })


});
