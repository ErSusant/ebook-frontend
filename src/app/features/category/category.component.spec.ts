import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should load categories from the backend when initialized', () => {
    fixture.detectChanges();

    const req = httpMock.expectOne('http://localhost:8084/api/v1/categories');
    expect(req.request.method).toBe('GET');

    req.flush({
      success: true,
      message: 'Categories fetched successfully',
      data: [
        { id: 1, name: 'Programming', description: 'Books related to programming', active: true, parentId: null }
      ]
    });

    expect(component.categories.length).toBe(1);
    expect(component.categories[0].name).toBe('Programming');
  });
});
