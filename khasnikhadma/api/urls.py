from django.urls import path

from api import views
urlpatterns = [
    path('apis/', views.usersView , name='users'),
    path('api/post', views.post , name='post'),
    path('api/user/<str:pk>/', views.userView ,name='user'),
    path('api/client/', views.clientView ,name='client'),
    path('api/artisan/', views.artisanView ,name='artisan'),
    path('api/register/', views.UserRegister.as_view() ,name='register'),
    path('api/valid/', views.EmailValidation.as_view() ,name='EmailValidation'),
    path('api/contectus/', views.UserContactUs.as_view() ,name='UserContactUs'),
     
]
