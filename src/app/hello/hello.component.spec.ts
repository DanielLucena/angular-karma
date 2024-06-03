import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloComponent } from './hello.component';
import { By } from '@angular/platform-browser';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter valores iniciais corretos', () => {
    expect(component.name).toBe('Fulano');
    expect(component.numMsgs).toBe(0);
  });

  it('deve aumentar o número de mensagens quando aumentar() for chamado', () => {
    component.aumentar();
    expect(component.numMsgs).toBe(1);
    component.aumentar();
    expect(component.numMsgs).toBe(2);
  });

  it('deve diminuir o número de mensagens quando diminuir() for chamado', () => {
    component.numMsgs = 2;
    component.diminuir();
    expect(component.numMsgs).toBe(1);
    component.diminuir();
    expect(component.numMsgs).toBe(0);
    component.diminuir();
    expect(component.numMsgs).toBe(0); // Não deve diminuir abaixo de 0
  });

  it('deve exibir corretamente a mensagem no template', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    component.numMsgs = 0;
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain('Você tem 0 mensagens.');

    component.numMsgs = 1;
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain('Você tem 1 mensagem.');

    component.numMsgs = 2;
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain('Você tem 2 mensagens.');
  });

  it('deve aumentar mensagens quando o botão "Aumentar mensagens" for clicado', () => {
    const aumentarButton = fixture.debugElement.query(By.css('button:first-of-type'));
    aumentarButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.numMsgs).toBe(1);
  });

  it('deve diminuir mensagens quando o botão "Diminuir mensagens" for clicado', () => {
    component.numMsgs = 1;
    fixture.detectChanges();
    const diminuirButton = fixture.debugElement.query(By.css('button:last-of-type'));
    diminuirButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.numMsgs).toBe(0);
  });
});
